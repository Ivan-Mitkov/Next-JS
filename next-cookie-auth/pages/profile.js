import {getUserProfile} from '../lib/auth'

export class Profile extends React.Component {
    state={
        user:null
    }
    componentDidMount(){
        // console.log('In CDM')
        getUserProfile().then(user=>this.setState({user}))

    }

    render() {
        // console.log('profile', this.state)
        const {user}=this.state;
        
        return (
            <pre>
             {JSON.stringify(user,null,2)}
            </pre>
        )
    }
}

export default Profile
