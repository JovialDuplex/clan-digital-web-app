import "./form.css";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox"
import {
    Field, 
    FieldDescription,
    FieldGroup,
    FieldError,
    FieldLabel,
    FieldSeparator,
    
} from "@/components/ui/field";
import {
    InputGroupButton, 
    InputGroup, 
    InputGroupInput
} from "@/components/ui/input-group";

import {Eye, EyeClosed} from "lucide-react";
import {FaGoogle, FaFacebook, FaGithub} from "react-icons/fa";
import {useState} from "react";
import { Link } from "react-router-dom";

const FormPage = function(){

    const [showPassword, setShowPassword] = useState(false);
    const [registerFormData, setRegisterFormData] = useState({
        username: "",
        email: "",
        password: "",
        agree: false
    });

    const registerHandleChange = function(event) {
        setRegisterFormData({...registerFormData, [event.target.name]: event.target.value})
    };

    return (
        <div className="form-page">
            <div className="main-container" onChange={(event)=> event.target.value}>
                
                {/* -------------- form-container --------------------- */}
                <div className="form-container">
                    
                    <div className="register-form">
                        <div className="form-header flex flex-col gap-1">
                            <span className="form-title"> Create an account </span><br/>
                            <span className="text-[var(--text-secondary)] text-sm" > I have Accont Already <Button className={"text-[var(--main-color)] bg-[var(--bg-main-container)] cursor-pointer"}> login </Button></span>
                        </div>

                        <form className={"form-body"}>
                            <Field>
                                <FieldLabel htmlFor={"username"}> Full Name </FieldLabel>
                                <Input onChange={registerHandleChange} value={registerFormData.username} type={"text"} id={"username"} name={"username"} />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor={"email"}> Email </FieldLabel>
                                <Input onChange={registerHandleChange} value={registerFormData.email} type={"email"} id={"email"} name={"email"} />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor={"password"}> Password</FieldLabel>
                                
                                <InputGroup style={{borderRadius: "5px", border: "1px solid var(--border-input)", background: "var(--bg-input)"}}>
                                    <InputGroupInput onChange={registerHandleChange} value={registerFormData.password} type={showPassword ? "text" : "password"} style={{borderTopRightRadius: 0, borderEndEndRadius: 0, borderRight: 0}} name={"password"}/>
                                    <InputGroupButton className={"cursor-pointer"} onClick={()=>{setShowPassword(!showPassword);}}> {showPassword ? <Eye/> : <EyeClosed />} </InputGroupButton>
                                </InputGroup>
                            </Field>
                            
                            <Field orientation="horizontal">
                                <Checkbox className={"cursor-pointer"} checked={registerFormData.agree} name={"agree"} onClick={()=>{setRegisterFormData({agree: !registerFormData.agree})}}/>
                                <p className={"text-sm text-[var(--text-primary)]"}> I accept the  <Link to={"/login"} style={{color: "var(--main-color)"}}> usage terms </Link> </p>
                            </Field>

                            <Field className={"submit-field px-4 mt-5 "}>
                                <Button> Create an account </Button>
                            </Field>
                        </form>
                        <br/>
                        <FieldSeparator> <span>Or continue with</span> </FieldSeparator>
                        
                        <Field orientation="horizontal" className={"form-footer"}>
                            <Button variant="outline"> <FaGoogle/> Google </Button>
                            <Button variant="outline"> <FaFacebook/> Facebook </Button>
                            <Button variant="outline"> <FaGithub /> Github </Button>
                        </Field>
                    </div>
                </div>

                {/*------------------ side-container ------------------ */}
                <div className="side-container">
                    
                </div>
            </div>
        </div>
    )
}

export default FormPage;