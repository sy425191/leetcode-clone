import { useState } from "react";
const SignInPage = () => {
  const [loginState, setLoginState] = useState(false);

  const signUp = () => {

    // .... code to handle clicked
  };

  return (
    <div
      className="h-screen w-screen flex flex-row"
      style={{
        backgroundImage: `url('signbg.jpg')`,
      }}
    >
      <div className="max-w-[400px] min-w-[400px] h-full flex flex-col justify-center items-end p-12 text-slate-100 bg-rose-900/30">
        <div className="text-2xl text-right font-bold">
          LEETCODE CLONE FOR DAILY PRACTISE
        </div>
        <div className="flex flex-col justify-center space-y-4 mt-12">
          <div className="w-[200px] py-2 px-4 text-slate-200 font-semibold bg-slate-500 rounded-xl">
            OPEN SOURCE
          </div>
          <div className="w-[200px] py-2 px-4 text-slate-200 font-semibold bg-slate-500 rounded-xl">
            FREE
          </div>
          <div className="w-[200px] py-2 px-4 text-slate-200 font-semibold bg-slate-500 rounded-xl">
            LIFETIME
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col items-center justify-evenly py-4 min-w-[300px] max-w-[300px] min-h-[35%] max-h-[50%] rounded-lg bg-slate-100/30 backdrop-blur-xl">
          <div className="text-slate-100 text-xl font-semibold">Leetcode Clone</div>
          {/* <div className="py-3">Sign up from Password Less</div> */}
          {loginState === false ? (
            <>
              <div
                className="mt-3 flex items-center justify-center text-center font-semibold w-[80%] mx-4 px-4 py-2 bg-slate-800 text-slate-50 rounded-xl hover:cursor-pointer hover:bg-slate-900"
                onClick={() => {
                  signUp();
                }}
              >
                <img src="glogin.png" className="w-[25px] mr-2" /> Sign In With
                Google
              </div>
            </>
          ) : (
            <div className="w-[100%] h-full flex justify-center items-center">
              <div className="relative block w-[80%] px-3 py-2 mb-4 text-base leading-5 text-white bg-green-500 rounded-lg opacity-100 font-regular">
                Email sent
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
