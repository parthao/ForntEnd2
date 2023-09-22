import React, { useState } from 'react';
import OTPInput, { ResendOTP } from "otp-input-react";

function Otp() {
    const[OTP, setOTP] = useState("");
    return (
        <div>
                <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure={false} renderInput={(props) => <input {...props} />}/>
        </div>

    );
}
export default Otp