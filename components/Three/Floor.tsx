export default function Floor(props) {
  return (
    <>
      <mesh {...props} recieveShadow>
        <boxBufferGeometry args={[20, 1, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
}
