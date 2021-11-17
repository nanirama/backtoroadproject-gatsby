import React, { useEffect, useState } from 'react'
import Loader from "react-loader-spinner";
import styled from 'styled-components'
import Select from 'react-select'
import ReCAPTCHA from "react-google-recaptcha";
import { Field, Formik } from 'formik';  
import * as yup from 'yup';  
import ToolTip from './ToolTip';
import arrowIcon from '../../../assets/images/landing/arrow.png'
import arrowRightIcon from '../../../assets/images/landing/arrow-right.png'


import { useStateValue } from '../../../StateProvider'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = yup.object().shape({  
    name: yup  
     .string()  
     .required('Please enter you Name'),   
     email: yup  
     .string()  
     .email('Email should be in the format username@domain.com'), 
    zip: yup  
     .string()  
     .required('Please enter Zip Code'),
    phone: yup.string()
     .matches(phoneRegExp, 'Min Phone number should be 10 digits without spaces')
     .when('email', {
        is: (email) => !email || email.length === 0,
        then: yup.string().required('Phone number should be of 10 digits with no special characters'),
        otherwise: yup.string()
    })
 }); 



const StepThree = ({setInStack, setPartsHeading, onClickToFour, onClickToTwo}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [{ year, make, model, part, stepBtnEnable }, dispatch] = useStateValue()
    const initialValues = {  
        name: '',  
        email: '',  
        zip: '',  
        phone: undefined
      }
    useEffect(() => {
        dispatch({
            type: 'ADD_STEP_ONE',
            item: ''
        });
        dispatch({
            type: 'ADD_STEP_TWO',
            item: ''
        });
        dispatch({
            type: 'ADD_STEP_THREE',
            item: 'THREE'
        });
        dispatch({
            type: 'ADD_BTN_ENABLE',
            item: false,
        });
        setInStack(' ✓ In Stock ')
        setPartsHeading(make +' '+ model +' '+ part)
    }, [year, make, model, part])

    
    const [dummy, setDummy] = useState();

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white', color: '#000000', width: '100%', borderRadius: '2px', alignItems: 'left', borderColor: '#CCCCCC'}),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                alignItems: 'left !important',
                color: '#000000'
            };
        },
    };

    const optionsStates = [
        { value: "Alabama", label: "Alabama" },
        { value: "Alaska", label: "Alaska" },
        { value: "American Samoa", label: "American Samoa" },
        { value: "Arizona", label: "Arizona" },
        { value: "Arkansas", label: "Arkansas" },
        { value: "California", label: "California" },
        { value: "Colorado", label: "Colorado" },
        { value: "Connecticut", label: "Connecticut" },
        { value: "Delaware", label: "Delaware" },
        { value: "District Of Columbia", label: "District Of Columbia" },
        { value: "Federated States Of Micronesia", label: "Federated States Of Micronesia" },
        { value: "Florida", label: "Florida" },
        { value: "Georgia", label: "Georgia" },
        { value: "Guam", label: "Guam" },
        { value: "Hawaii", label: "Hawaii" },
        { value: "Idaho", label: "Idaho" },
        { value: "Illinois", label: "Illinois" },
        { value: "Indiana", label: "Indiana" },
        { value: "Iowa", label: "Iowa" },
        { value: "Kansas", label: "Kansas" },
        { value: "Kentucky", label: "Kentucky" },
        { value: "Louisiana", label: "Louisiana" },
        { value: "Maine", label: "Maine" },
        { value: "Marshall Islands", label: "Marshall Islands" },
        { value: "Maryland", label: "Maryland" },
        { value: "Massachusetts", label: "Massachusetts" },
        { value: "Michigan", label: "Michigan" },
        { value: "Minnesota", label: "Minnesota" },
        { value: "Mississippi", label: "Mississippi" },
        { value: "Missouri", label: "Missouri" },
        { value: "Montana", label: "Montana" },
        { value: "Nebraska", label: "Nebraska" },
        { value: "Nevada", label: "Nevada" },
        { value: "New Hampshire", label: "New Hampshire" },
        { value: "New Jersey", label: "New Jersey" },
        { value: "New Mexico", label: "New Mexico" },
        { value: "New York", label: "New York" },
        { value: "North Carolina", label: "North Carolina" },
        { value: "North Dakota", label: "North Dakota" },
        { value: "Northern Mariana Islands", label: "Northern Mariana Islands" },
        { value: "Ohio", label: "Ohio" },
        { value: "Oklahoma", label: "Oklahoma" },
        { value: "Oregon", label: "Oregon" },
        { value: "Palau", label: "Palau" },
        { value: "Pennsylvania", label: "Pennsylvania" },
        { value: "Puerto Rico", label: "Puerto Rico" },
        { value: "Rhode Island", label: "Rhode Island" },
        { value: "South Carolina", label: "South Carolina" },
        { value: "South Dakota", label: "South Dakota" },
        { value: "Tennessee", label: "Tennessee" },
        { value: "Texas", label: "Texas" },
        { value: "Utah", label: "Utah" },
        { value: "Vermont", label: "Vermont" },
        { value: "Virgin Islands", label: "Virgin Islands" },
        { value: "Virginia", label: "Virginia" },
        { value: "Washington", label: "Washington" },
        { value: "West Virginia", label: "West Virginia" },
        { value: "Wisconsin", label: "Wisconsin" },
        { value: "Wyoming", label: "Wyoming" }
    ]

    const clickFunction = (e) => {
        console.log('E - landing page form', e.value)
        console.log('ENABLE GET QUOTE');
        dispatch({
            type: 'ADD_STEP_THREE',
            item: e.value,
        });
        dispatch({
            type: 'ADD_BTN_ENABLE',
            item: true,
        });
    }
    const clickPrevFunction = (e) => {
        dispatch({
            type: 'ADD_STEP_ONE',
            item: ''
        });
        dispatch({
            type: 'ADD_STEP_TWO',
            item: 'TWO'
        });
        dispatch({
            type: 'ADD_STEP_THREE',
            item: '',
        });
        onClickToTwo()
    }

    const ddlNameChange = (e) => {
        console.log('E - Name', e.target.value)
        dispatch({
            type: 'ADD_NAME',
            item: e.target.value,
        });
    }

    const ddlEmailChange = (e) => {
        console.log('E Email', e.target.value)
        dispatch({
            type: 'ADD_EMAIL',
            item: e.target.value,
        });
        dispatch({
            type: 'ADD_BTN_ENABLE',
            item: true,
        });
    }

    const ddlPhoneChange = (e) => {
        console.log('E - Phone', e.target.value)
        dispatch({
            type: 'ADD_PHONE',
            item: e.target.value,
        });
    }

    const ddlZipChange = (e) => {
        console.log('E - Zip', e.target.value)
        dispatch({
            type: 'ADD_ZIP',
            item: e.target.value,
        });
    }

    const ddlTxtChange = (e) => {
        console.log('E - Notes', e.target.value)
        dispatch({
            type: 'ADD_NOTES',
            item: e.target.value,
        });

    }

    const onChangeCaptcha = (e) => {
        // Todo - call API to verify the key.
    }

    const submitForm = (values) => {
        console.log('Form Submit', values);
        setIsSubmitting(true)
        onClickToFour();
      };
    return(
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik;
        return (
              <form onSubmit={handleSubmit}>
                <InputWrapper>
                    <TitleDiv>
                        <h4 className="w-100 mb-1">For Quotes and Assistance</h4>
                    </TitleDiv>
                    <InputWrap>
                        <InputLabel htmlFor="name">NAME *
                        <Field
                            name="name"
                            value={values.name}
                            render={({ field, form }) => (
                                <input
                                    aria-labelledby="name"
                                    type="text"
                                    id="name"
                                    name="name"
                                    id="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Name"
                                    className="custominput"
                                    onChange={e => {
                                        handleChange(e);
                                        ddlNameChange(e)                                                         
                                    }}
                                />                            
                            )}
                        />
                        </InputLabel>
                        {errors.name && touched.name && (
                            <ErrorLabel>{errors.name}</ErrorLabel>
                        )}
                    </InputWrap>
                    <InputWrap>
                        <InputLabel htmlFor="email" className="d-flex justify-content-start align-items-md-center align-items-sm-start">
                            <span className="mr-2">EMAIL * (FOR QUOTE ONLY) *</span>
                            <ToolTip title="?" content="We will send the lowest prices from our inventory and from our Nationwide Parts Locator Tool"/>
                            {/* <DialogToolTip content="We will send the lowest prices from our inventory and from our Nationwide Parts Locator Tool"/> */}
                        </InputLabel> 
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={values.email}
                                onChange={e => {
                                    handleChange(e);
                                    ddlEmailChange(e)                                                 
                                }}
                            placeholder="Email"
                            id="email"
                            aria-labelledby="email"
                        />
                        
                        
                        {errors.email && touched.email && (
                            <ErrorLabel>{errors.email}</ErrorLabel>
                        )}
                    </InputWrap>
                </InputWrapper>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <InputWrap>
                        <InputLabel htmlFor="phone" className="d-flex justify-content-start align-items-center">
                            <span className="mr-2">PHONE * </span>
                            <ToolTip title="Why ?" content="Our Parts Specialists decode your VIN number for free to get you an accurate price quote"/>
                        </InputLabel> 
                            <input
                                className="custominput"
                                aria-labelledby="phone"
                                type="text"
                                name="phone"
                                placeholder='Phone'
                                id="phone"
                                value={values.phone}
                                    onChange={e => {
                                        handleChange(e);
                                        ddlPhoneChange(e)                                              
                                    }}
                                
                            />
                            
                            {errors.phone && touched.phone && (
                                <ErrorLabel>{errors.phone}</ErrorLabel>
                            )}
                        </InputWrap>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <InputWrap>
                        <InputLabel htmlFor="zip">ZIP * (FOR QUOTE ONLY)</InputLabel>
                            <input
                                className="custominput"
                                aria-labelledby="zip" 
                                type="text"
                                name="zip"
                                placeholder='Zipcode'
                                id="zip"
                                value={values.zip}
                                    onChange={e => {
                                        handleChange(e);
                                        ddlZipChange(e)                                       
                                    }}
                                
                            />
                        
                            {errors.zip && touched.zip && (
                                <ErrorLabel>{errors.zip}</ErrorLabel>
                            )}
                        </InputWrap>
                    </div>
                </div>
                
                <div className="form_button_outer">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                        {/* <button className="btn2 d-flex align-items-center justify-content-center" onClick={onClick} ><span>FIND MY PART NOW</span><InputBg img={arrowIcon}>&nbsp;&nbsp;</InputBg></button> */}
                        <button
                        onClick={clickPrevFunction}
                        className="btn-outer-new text-center d-flex justify-content-center align-items-center"
                        type="button"><InputBgPrev img={arrowRightIcon}>&nbsp;</InputBgPrev><span>Previous Step</span></button>
                        </div>
                        <div className="col-md-6 col-sm-6">
                        <button
                            type="submit"
                            className="btn2 d-flex align-items-center justify-content-center"
                            disabled={isSubmitting}
                            >
                                { isSubmitting && (
                                    <Loader
                                        type="Oval"
                                        color="#FFFFFF"
                                        height={20}
                                        width={20}
                                        timeout={300000}
                                    />
                                )}  
                                { !isSubmitting && (
                                    <>
                                    <span className="mr-2">FIND MY PART NOW</span>
                                    <InputBg img={arrowIcon}>&nbsp;</InputBg>
                                    </>
                                )}  

                        </button>
                        </div>
                    </div>
                </div>
                {/* <div className="form_button_outer">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <button
                            onClick={clickPrevFunction}
                            className="btn-outer-new text-center d-flex justify-content-center align-items-center"
                            type="button">Previous Step</button>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <button
                            type="submit"
                            className="btn2 border2 text-center d-flex justify-content-center align-items-center"
                            disabled={isSubmitting}
                            >
                                <span className="mr-2">FIND MY PART NOW</span>
                                { isSubmitting && (
                                    <Loader
                                        type="Oval"
                                        color="#FFFFFF"
                                        height={20}
                                        width={20}
                                        timeout={300000}
                                    />
                                )}                            
                        </button>
                    </div>
                </div>
                
                
                </div> */}
                
              
              </form>
        );
      }}
    </Formik>
    )
        

    
}


export default StepThree

const InputWrapper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 0rem;
  width: 100%;
`
const InputBg = styled.span`
    display: inline-block;
    color:transparent !important;
    background-position:center center;
    background-size: auto auto !important;
    background-image: url(${(props)=>props.img});  
    background-repeat: no-repeat;
    width:18px !important;
    height:18px !important;
    margin-left:8px;
`
const InputBgPrev = styled.span`
    display: inline-block;
    color:transparent !important;
    background-position:center center;
    background-size: auto auto !important;
    background-image: url(${(props)=>props.img});  
    background-repeat: no-repeat;
    width:18px !important;
    height:18px !important;
    margin-right:8px;
`
const InputWrap = styled.div`
  margin: 0.2rem 0rem;
  padding:0px;
  width: 100%;
  input{padding: 1.2rem 0.5rem;}
  input,textarea{    
    outline: none;
    width: 100%;
    height: 20px;
    border-radius:3px;
    border:1px solid #CCCCCC;
    margin:0rem 0rem 0.3rem 0rem;
  }
  textarea {
    height: 60px;
    padding: 0.5rem;
  }  
`
const ErrorLabel = styled.label`
    padding:0px;
    margin:-5px 0px 0px;
    font-size:12px !important;
    line-height:14px !important;
    color:#ff0000 !important;
`
const InputLabel = styled.label`
    width: 100%;
    float: left;
    color: #233A6C;
    font-size: 14px;
    line-height: 21px;
`



const TitleDiv = styled.div`
  width:100%;
  background: #ffffff;
  @media (min-width: 480px) {
    height: 30px;
  }
  margin: 0px 0px 3px;
  text-align: start;
  h4{
    margin: 0px 0px 5px;
    color: #08275C;
    font-weight: 700;
    font-size: 22px;
  }
  @media (max-width: 480px) {
    h4{
        line-height:1.2 !important;
        float:left;
        width:100%;
        overflow:hidden;
      }
  }
`