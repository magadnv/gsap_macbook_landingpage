import {Environment, Lightformer, SpotLight} from "@react-three/drei";

const StudioLights = () => {
    return (
        <group name='lights'>
            <Environment resolution={256}>
                <group>
                    <Lightformer

                        form='rect'
                        intensity={10}
                        position={[-10,8,-10]}
                        scale={10}
                        rotation-y={Math.PI / 2}

                    />
                    <Lightformer

                        form='rect'
                        intensity={10}
                        position={[10,0,5]}
                        scale={10}
                        rotation-y={Math.PI / 2}

                    />
                </group>

            </Environment>

            <spotLight
                position={[20,-5,-10]}
                angle={0.15}
                decay={0.1}
                intensity={Math.PI * 0.5}
            />
            <spotLight
                position={[-20,5,10]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
            />
            <spotLight
                position={[0,5,5]}
                angle={0.25}
                decay={2}
                intensity={Math.PI * 0.1}
            />
        </group>
    )
}
export default StudioLights
