import { useRecoilValue } from 'recoil'
import { loginModalState } from '../../atom/Modal'
import Modal from '../../component/modal/login/login'

export default function Login(){
    const isOpen = useRecoilValue(loginModalState)
    return (
        <>
            {isOpen && <Modal />}
        </>
    )
}