import './App.css';
import React from 'react'
import {createStructuredSelector} from 'reselect'
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigninandSignoutPage from './pages/sign-in and sign-out/sign-in and sign-out.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import { connect } from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selectors'
import CheckoutPage from './pages/checkout/checkout.component';

import {setCurrentUser} from './redux/user/user.action'
class App extends React.Component{
  
  unsubscribeFromAuth=null;

  componentDidMount(){
    const {setCurrentUser}=this.props;

   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth =>{
 if(userAuth){
    const userRef=await createUserProfileDocument(userAuth);
    userRef.onSnapshot(snapshot=>{
      setCurrentUser({
        
          id:snapshot.id,...snapshot.data()
        
      })
    })
 }
 setCurrentUser(userAuth)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return(
<div >
    <BrowserRouter>
    <Header />
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/Checkout' component={CheckoutPage} />
       
        <Route exact path='/signin' render={()=>this.props.currentUser?(
       
        <Redirect to='/'/>):(

        <SigninandSignoutPage/>
        )} />
     
      </Switch>
      </BrowserRouter>
    </div>
  )
}

}

const mapStatetoProps=createStructuredSelector({
  currentUser:selectCurrentUser
})
const mapDispatchToProps=dispatch=>({
setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps,mapDispatchToProps) (App);
