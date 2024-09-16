import { BallTriangle,InfinitySpin } from 'react-loader-spinner'
export default function Loading_comp() {
    return (
        // <BallTriangle
        //     height={150}
        //     width={150}
        //     radius={5}
        //     color="#6EACDA"
        //     ariaLabel="ball-triangle-loading"
        //     wrapperStyle={{}}
        //     wrapperClass=""
        //     visible={true}
        // />
        <InfinitySpin
            visible={true}
            width="250"
            height={150}
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
        />
    )
}
