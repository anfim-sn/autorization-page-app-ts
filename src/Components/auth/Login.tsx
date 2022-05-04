import {Forms} from './Forms';
import {setUser} from '../../store/slices/userSlice'
import {useNavigate} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UseAppDispatch } from '../../hooks/redux-hooks';

const Login = () => {
	const dispatch = UseAppDispatch();
	const navigate = useNavigate();

	const handleLogin = (email: string, password: string) => {
		if (!email && !password) return
		const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch(() => alert('Invalid user!'))
		navigate('/')
	}
  return (
	 <div>
		<Forms 
			title="Log In"
			handleClick={handleLogin}
		/>
	 </div>
  )
}

export {Login}