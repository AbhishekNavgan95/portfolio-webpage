import { ReactLenis } from '@studio-freight/react-lenis'

function SmoothScroll({ children }) {

    return (
        <ReactLenis root options={{
            duration: 1.4,
        }}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;