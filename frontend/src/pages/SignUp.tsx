import Input from "@/ui/Input";
import { RiUserLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import Button from "@/ui/Button";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="mt-10 flex w-full items-center justify-center">
      <div className="bg-light-secondary grid grid-cols-2 rounded-xl">
        <img src="/authImage.png" alt="authimage" className="w-auto max-w-72" />
        <div className="flex w-72 flex-col items-center gap-8 px-10 pt-8">
          <div className="text-3xl font-bold">Register</div>
          <div className="flex flex-col items-start gap-3">
            <Input type="text" label="Username" className="">
              <RiUserLine className="absolute left-2 top-2" />
            </Input>
            <Input type="email" label="Email" className="">
              <FiMail className="absolute left-2 top-2" />
            </Input>
            <Input
              type={`${visible ? "text" : "password"}`}
              label="Password"
              className=""
            >
              <MdLockOutline className="absolute left-2 top-2" />
              {visible ? (
                <LuEye
                  className="absolute right-2 top-2"
                  onClick={() => setVisible((prev) => !prev)}
                />
              ) : (
                <LuEyeOff
                  className="absolute right-2 top-2"
                  onClick={() => setVisible((prev) => !prev)}
                />
              )}
            </Input>
          </div>
          <Button>Submit</Button>
          <div className="text-xs">
            Already have an Account?{" "}
            <Link to={"/signin"}>
              <b>Login</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
