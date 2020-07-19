const JSSoup = require('jssoup').default;
const axios = require('axios').default;
// import JSSoup from 'jssoup';
// import axios from 'axios';

const BASE_URL = "https://uims.cuchd.in"
const AUTHENTICATE_URL = BASE_URL + "/uims/"

const USER_ID = "18BCS3848"

const ENDPOINTS = {"Attendance": "frmStudentCourseWiseAttendanceSummary.aspx"}


let response_obj = axios.get(AUTHENTICATE_URL)

var data = new Object()

response_obj.then(
    (response)=>{
        let soup =new JSSoup(response.data)
        let viewstate_tag = soup.find("input", {"name":"__VIEWSTATE"})
        
        // console.log(viewstate_tag)
        
        data = {
            "_VIEWSTATE": viewstate_tag["attrs"]["value"],
            "txtUserID": USER_ID,
            "btnNext":"NEXT"
        }
        console.log(data)
    }
)



