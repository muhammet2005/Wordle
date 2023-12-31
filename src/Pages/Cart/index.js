import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
import CartUi from './CartUi'
import Horse from '../../assets/img/horse.png'
import HarryPotter from '../../assets/img/harryPotter.png'
import Subtle from '../../assets/img/subtle.png'

const Cart = ({ dark }) => {

	console.log("hi it is dark  " + dark)
	return (
		<>
			<div className="container">
				<div className="cart">
					<div className="cartItems">
						<h1
							style={{ color: dark? 'red' : 'blue' }}
							className={'cartTitle'}
						>
							Your cart
						</h1>

						{
							// here when you press the link you should to go to all books
						}
						<div className="returnToShop">
							<p>Not ready to checkout?</p>
							<NavLink to={'/books'}>Continue Shopping</NavLink>
						</div>
						<div className="booksAndPayment">
							<div className="itemsContainer">
								<CartUi
									photo={Horse}
									name={`THE BOY, THE MOLE, THE FOX AND THE HORSE`}
									author={'by Charlie Mackesy'}
									quantity={'Quantity: 1'}
									cost={'$99'}
								/>
								<CartUi
									photo={Subtle}
									name={`THE SUBTLE ART OF NOT GIVING A F*CK`}
									author={'by Mark Manson'}
									quantity={'Quantity: 1'}
									cost={'$99'}
								/>
								<CartUi
									photo={HarryPotter}
									name={'HARRY POTTER'}
									author={'by J.K. Rowling'}
									quantity={'Quantity: 1'}
									cost={'$99'}
								/>
							</div>

							<div className="orderSummary">
								<h3>Order Summary</h3>

								<div className="details">
									<div className="shipping">
										<p>Shipping</p>

										<p>Select Method ></p>
									</div>

									<div className="payment">
										<p>Payment</p>

										<p>Select Method ></p>
									</div>

									<div className="total">
										<p>Total</p>
										<p className={'totalCost'}>$188</p>
									</div>
								</div>

								<button className={'checkoutBtn'}>Continue to checkout</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Cart
