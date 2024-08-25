import { BallTriangle } from 'react-loader-spinner'
export default function Loading_comp() {
    return (
        <main className='position-absolute w-100 vh-100 d-flex align-items-center justify-content-center'>
            <BallTriangle
                height={150}
                width={150}
                radius={5}
                color="#6EACDA"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </main>
    )
}
