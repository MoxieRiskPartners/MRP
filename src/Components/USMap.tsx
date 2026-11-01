'use client';

import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { Suspense, useMemo, useState } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import usaMapData from '@svg-maps/usa';

interface MapLocation {
  id: string; // lowercase 2-letter code, e.g. "ia"
  name: string;
  path: string; // SVG path data
}
interface SvgMap {
  viewBox: string;
  locations: MapLocation[];
}
const usaMap = usaMapData as unknown as SvgMap;

const SCALE = 0.0018; // svg units -> world units
const DEPTH = 45; // extrusion depth in svg units

// Non-contiguous / non-state regions to leave off the map.
const EXCLUDED = new Set(['ak', 'hi', 'dc']);

interface StateGeom {
  id: string;
  geometries: THREE.ExtrudeGeometry[];
}

function USStates({
  active,
  onSelect,
}: {
  active: string | null;
  onSelect?: (code: string) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  // Parse the state polygons once and extrude each into a 3D solid.
  const states = useMemo<StateGeom[]>(() => {
    const svg =
      `<svg viewBox="${usaMap.viewBox}" xmlns="http://www.w3.org/2000/svg">` +
      usaMap.locations
        .filter((l) => !EXCLUDED.has(l.id))
        .map((l) => `<path id="${l.id}" d="${l.path}"/>`)
        .join('') +
      `</svg>`;

    const parsed = new SVGLoader().parse(svg);

    return parsed.paths.map((path) => {
      const node = path.userData?.node as Element | undefined;
      const id = node?.getAttribute('id') ?? '';
      const shapes = path.toShapes();
      const geometries = shapes.map(
        (shape) =>
          new THREE.ExtrudeGeometry(shape, {
            depth: DEPTH,
            bevelEnabled: false,
          })
      );
      return { id, geometries };
    });
  }, []);

  return (
    // Flip Y (SVG y grows downward) and scale into world units.
    <group scale={[SCALE, -SCALE, SCALE]}>
      {states.map((state) => {
        const isActive = active != null && state.id === active;
        const isHover = hovered === state.id;
        const fill = isActive ? '#231F20' : isHover ? '#DDBB7D' : '#CC9F54';
        return (
          <group
            key={state.id}
            position-z={isActive ? 55 : isHover ? 22 : 0}
            scale-z={isActive ? 2.4 : 1}
            onClick={(e) => {
              e.stopPropagation();
              onSelect?.(state.id.toUpperCase());
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHovered(state.id);
              document.body.style.cursor = 'pointer';
            }}
            onPointerOut={() => {
              setHovered((h) => (h === state.id ? null : h));
              document.body.style.cursor = 'auto';
            }}
          >
            {state.geometries.map((geometry, i) => (
              <group key={i}>
                <mesh geometry={geometry}>
                  <meshStandardMaterial
                    color={fill}
                    metalness={0.25}
                    roughness={0.55}
                  />
                </mesh>
                {/* Crisp state borders */}
                <lineSegments>
                  <edgesGeometry args={[geometry]} />
                  <lineBasicMaterial
                    color={isActive ? '#DDBB7D' : '#14171A'}
                    transparent
                    opacity={isActive ? 0.9 : 0.5}
                  />
                </lineSegments>
              </group>
            ))}
          </group>
        );
      })}
    </group>
  );
}

interface USMapProps {
  /** 2-letter state code to highlight (e.g. "IA"). Case-insensitive. */
  highlightCode?: string | null;
  /** Called with the uppercase 2-letter code when a state is clicked. */
  onStateSelect?: (code: string) => void;
  className?: string;
}

export default function USMap({ highlightCode, onStateSelect }: USMapProps = {}) {
  const active = highlightCode ? highlightCode.toLowerCase() : null;
  const activeName = active
    ? usaMap.locations.find((l) => l.id === active)?.name ?? null
    : null;

  return (
    <div className="w-full">
      <div className="h-[680px] w-full sm:h-[840px]">
        <Canvas
          camera={{ position: [0, 0, 1.4], fov: 45 }}
          gl={{ antialias: true }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.9} />
            <directionalLight position={[4, 6, 8]} intensity={1.6} />
            <directionalLight position={[-6, -4, 4]} intensity={0.4} color="#CC9F54" />

            {/* Fixed 3D perspective — tilted enough to read as 3D while keeping
                every state visible. Static: the map can't be rotated or zoomed. */}
            <group rotation={[-0.35, 0, 0]}>
              <Center>
                <USStates active={active} onSelect={onStateSelect} />
              </Center>
            </group>
          </Suspense>
        </Canvas>
      </div>

      <p className="mt-2 text-center text-sm text-gray-400">
        {activeName ? (
          <>
            Highlighted:{' '}
            <span className="font-semibold text-[#CC9F54]">{activeName}</span>
          </>
        ) : (
          'Click a state on the map, or enter a ZIP code above.'
        )}
      </p>
    </div>
  );
}
