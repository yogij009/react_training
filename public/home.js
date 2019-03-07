const e = React.createElement;

const AppNav = () => (
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">My Blog</a>
        <a role="button" class="btn btn-outline-info navbar-btn" href="/login">Login</a>
    </nav>
);

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppNav />
                <div class="card mt-4" Style="width: 100%;">
                    <div class="card-body">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr/>
                        <label name="Name"><b>Name</b></label>
                            <input type="text" placeholder="Enter Name" name="Name" required/><br/>

                             <label name="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required/><br/>


                            <label name="Phoneno"><b>Phoneno</b></label>
                            <input type="text" placeholder="Enter Phoneno" name="Phoneno" required/><br/>

                                <label name="description"><b>description</b></label>
                                <input type="description" placeholder="Enter description" name="description" required/><br/>

                             <button type="submit" class="signupbtn">Sign Up</button>
                                     
                    </div>
                </div>
            </div>
                                );
                            }
                        }
                        
                        const domContainer = document.querySelector('#root');
ReactDOM.render(e(Home), domContainer);