import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removePhone } from '../../store/slices/phoneSlice'
import {PhoneTypes} from './PhoneList'

const PhoneItem = ({ id, name, number }: PhoneTypes) => {
	const dispatch = useDispatch();

	const handleRemove = () => {
		dispatch(removePhone({id: id}))
	}

  return (
	 <div className='phone_item' id={id}>
		<div className='content'>
			<p className='phone_name'>
				{name}
			</p>
			<p className="phone_number">
				{number}
			</p>
		</div>
		<div>
			<Button className='delete' variant='danger' onClick={handleRemove}>x</Button>
		</div>
	 </div>
  )
}

export default PhoneItem