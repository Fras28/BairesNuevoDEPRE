import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Loguito from "../assets/casaMonteLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { asyncSearchBar, SearchProducts } from "../redux/slice";

export const Nav = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  let copyallProducts = useSelector((state) => state.allData);

  const handleChange = (e) => {
    //setError(false);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncSearchBar(search));

    setSearch("");
  };

  const handleEnter = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    dispatch(asyncSearchBar(search));
    setSearch("");
  };

  return (
    <div className="contNav">
      <div>
        <NavLink to="/">
          <img className="logoCM" src={Loguito} alt="" />
        </NavLink>
      </div>
      <div className="section2">
        <form className="formNav" onSubmit={handleSubmit}>
          <button>
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                stroke-width="1.333"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <input
            className="input"
            placeholder="Que te gustaria comer?"
            required=""
            type="text"
            name="text"
            autofocus
            value={search}
            onChange={handleChange}
            autoComplete="off"
          />
          <button className="reset" type="reset" onKeyDown={handleEnter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>
          <NavLink to="/">

          <button className="btnBag">
          <svg width="24" height="30" viewBox="0 0 474 484" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M464.52 200C419.275 123.766 310.253 112.938 247.467 58.3604C243.154 53.9333 236.113 53.7353 231.56 57.9125C216.628 73.4431 201.696 88.7511 187.877 105.027C188.398 97.1105 187.877 88.8245 187.877 80.3871C187.877 64.3351 188.549 47.9085 187.278 31.9285C185.263 6.76713 171.002 -2.04488 146.809 0.720458C126.574 3.03299 87.5224 6.91832 76.101 26.5538C70.2 36.7101 73.5646 49.8511 75.1323 60.8245C76.7626 78.2618 81.0178 95.3511 87.752 111.522C88.3562 112.85 89.6843 113.704 91.1479 113.704C92.6115 113.704 93.9396 112.85 94.5438 111.522C101.039 90.6151 97.2312 70.3085 100.294 49.2511C102.158 36.5585 112.913 36.4074 123.887 33.5685C130.382 31.9278 146.288 26.0997 153.751 28.3393C161.22 30.5789 159.574 32.5945 159.876 42.6779C160.173 52.7561 159.876 63.8086 160.251 74.3339C160.251 91.2086 156.444 110.173 164.73 125.407C166.308 128.584 169.439 130.694 172.975 130.97C176.512 131.246 179.928 129.647 181.98 126.751C181.98 126.303 182.428 125.855 182.652 125.48V125.485C202.204 111.745 221.048 97.0161 239.1 81.3547C262.694 102.86 291.366 115.401 319.294 130.86C351.966 148.943 383.106 169.667 412.403 192.833C424.028 203.005 436.991 211.547 450.93 218.219C462.357 223.146 470.123 209.484 464.518 200L464.52 200Z" fill="#c1373e"/>
<path d="M53.9333 218.147C63.1937 210.678 72.4493 203.215 81.4853 195.746C96.4173 182.829 113.069 169.912 123.073 152.366C124.391 149.397 124.058 145.954 122.193 143.293C120.329 140.631 117.204 139.147 113.964 139.371C87.8279 144.97 63.7866 162.516 41.7613 177.226C23.0946 189.694 -1.99342 199.627 0.547915 224.939C1.06876 230.392 6.00098 233.152 10.1782 235.319C16.6001 238.605 35.4902 231.439 41.6102 227.85C45.9227 224.882 50.0373 221.637 53.9331 218.147L53.9333 218.147Z" fill="#c1373e"/>
<path d="M193.787 290.787C162.355 304.527 177.88 367.766 181.615 392.11C183.334 403.084 190.797 430.636 187.964 439.746C191.745 450.844 187.292 453.907 174.6 448.928H160.933C133.141 447.917 105.381 451.574 78.8024 459.756C75.8909 460.803 77.2347 464.907 79.8493 465.282H79.8441C93.167 466.673 106.547 467.35 119.943 467.298C141.672 467.745 168.697 473.87 189.828 470.36C195.875 469.313 200.281 470.36 205.432 465.657C222.38 449.605 210.213 405.25 207.745 385.84C204.76 362.47 195.349 323.345 224.843 316.7C248.437 311.325 262.698 325.21 261.578 346.564C259.265 390.318 248.214 428.7 256.052 473.048C258.963 489.324 284.651 486.037 281.588 469.839C274.119 431.985 280.171 395.995 285.916 358.662C287.932 345.594 296.442 321.329 287.557 308.115C274.354 288.99 213.197 282.271 193.786 290.787L193.787 290.787Z" fill="#c1373e"/>
<path d="M461.174 363.219C461.174 320.107 462.56 278.713 444.782 237.696C439.581 225.594 418.767 231.343 420.242 243.45C423.019 270.797 429.957 297.023 430.386 324.593C430.822 354.029 427.785 383.842 434.027 412.982C435.153 418.136 447.292 442.866 445.907 446.906C442.266 458.414 418.331 450.492 408.188 450.117H408.194C373.633 448.053 338.907 451.086 305.524 459.081C303.709 459.868 302.711 461.593 303.074 463.319C303.431 465.044 305.064 466.357 307.084 466.55C349.225 467.519 390.241 466.55 432.389 470.881C450.685 472.898 468.983 474.316 473.489 455.266C475.745 445.63 469.933 436.514 467.592 427.096V427.102C462.674 406.082 460.521 384.651 461.174 363.219L461.174 363.219Z" fill="#c1373e"/>
<path d="M130.547 398.454C132.021 396.266 131.817 393.355 130.052 391.396C128.286 389.433 125.411 388.928 123.083 390.167C102.214 402.808 82.895 417.844 65.515 434.964C66.5567 425.642 67.1036 416.271 67.1557 406.891C74.2808 400.407 81.7544 394.323 89.5571 388.672C97.6196 382.771 110.088 378.146 115.39 369.407C116.265 368.1 116.385 366.428 115.713 365.006C115.041 363.584 113.672 362.621 112.104 362.464C101.427 362.464 91.8693 370.678 83.8066 376.948C77.8744 381.646 72.3326 386.818 67.2333 392.407C67.2333 382.85 66.2645 373.142 65.3688 363.438C83.9621 351.193 103.077 339.542 120.546 326.104L120.541 326.099C122.999 324.636 123.801 321.464 122.333 319.011C120.869 316.552 117.697 315.75 115.244 317.214C96.5934 326.693 79.3121 338.651 63.8694 352.755C62.7496 342.823 61.4788 332.895 60.0621 322.891C78.8074 308.782 99.4888 296.907 116.141 280.927C119.349 277.865 115.542 272.339 111.511 273.458C90.6772 280.927 73.2078 296.38 58.1251 312.36C57.0783 305.641 56.1096 298.922 55.0626 292.349V292.354C60.0262 289.141 64.7918 285.625 69.3226 281.823C76.4164 276.896 84.2546 273.537 91.1973 268.386C92.7754 267.136 93.4525 265.063 92.9161 263.125C92.3796 261.183 90.7338 259.756 88.7338 259.5C78.6505 259.307 68.8845 263.026 61.4832 269.875C58.3634 272.422 55.5144 275.271 52.9676 278.391C51.6238 269.281 50.353 260.323 49.3113 251.807C48.9363 248.374 44.3061 249.343 43.7853 251.807C36.7645 290.556 40.202 330.208 42.0665 369.333C43.7072 403.907 40.0509 438.177 40.7957 472.672C40.7957 480.141 52.5926 483.276 55.3583 475.88C58.8895 466.193 61.5146 456.192 63.1969 446.016C89.4729 436.428 112.724 420.011 130.546 398.454L130.547 398.454Z" fill="#c1373e"/>
</svg>

          </button>
          </NavLink>
        <NavLink to="/Bag">
          <button className="btnBag">
            <svg
              width="24"
              height="24"
              viewBox="0 0 603 677"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M359.948 338.331C338.855 338.294 318.912 347.966 305.875 364.56C304.729 365.888 303.057 366.659 301.302 366.659C299.547 366.659 297.875 365.888 296.729 364.56C283.693 347.967 263.75 338.295 242.656 338.331C224.182 338.44 206.51 345.873 193.51 358.998C180.51 372.117 173.245 389.862 173.308 408.331C171.537 471.68 210.037 524.18 290.99 568.984C297.412 572.521 305.193 572.521 311.616 568.984C392.569 524.182 431.069 471.682 429.298 408.504V408.499C429.397 390.004 422.147 372.228 409.142 359.072C396.142 345.916 378.449 338.458 359.949 338.338L359.948 338.331Z"
                fill="red"
              />
              <path
                d="M190.482 250.838C190.482 260.504 182.648 268.338 172.982 268.338C163.315 268.338 155.482 260.504 155.482 250.838C155.482 241.171 163.315 233.338 172.982 233.338C182.648 233.338 190.482 241.171 190.482 250.838Z"
                fill="black"
              />
              <path
                d="M435.468 250.838C435.468 260.504 427.635 268.338 417.968 268.338C408.302 268.338 400.468 260.504 400.468 250.838C400.468 241.171 408.302 233.338 417.968 233.338C427.635 233.338 435.468 241.171 435.468 250.838Z"
                fill="black"
              />
              <path
                d="M535.015 197.891C533.562 188.245 528.687 179.443 521.275 173.099C513.869 166.755 504.426 163.287 494.671 163.333H423.807V222.26C433.333 224.208 441.266 230.771 444.958 239.765C448.65 248.765 447.614 259.005 442.197 267.083C436.781 275.16 427.697 280.005 417.973 280.005C408.249 280.005 399.167 275.161 393.749 267.083C388.332 259.005 387.296 248.765 390.989 239.765C394.682 230.771 402.614 224.208 412.14 222.26V163.333H178.806V222.26C188.332 224.208 196.265 230.771 199.957 239.765C203.65 248.765 202.613 259.005 197.196 267.083C191.78 275.16 182.696 280.005 172.972 280.005C163.248 280.005 154.166 275.161 148.748 267.083C143.331 259.005 142.295 248.765 145.988 239.765C149.681 230.771 157.613 224.208 167.139 222.26V163.333H107.941C98.1862 163.287 88.7441 166.755 81.3374 173.099C73.9259 179.443 69.051 188.244 67.5974 197.891L0.446713 629.558C-1.30329 641.323 2.13937 653.271 9.87897 662.307C17.6186 671.344 28.895 676.583 40.791 676.667H561.818C573.714 676.584 584.99 671.344 592.73 662.307C600.469 653.271 603.912 641.323 602.162 629.558L535.015 197.891ZM317.282 579.224C307.334 584.688 295.282 584.688 285.334 579.224C201.391 532.755 159.776 475.203 161.667 408.198V408.193C161.636 386.657 170.141 365.979 185.323 350.698C200.5 335.417 221.12 326.771 242.662 326.657C264.875 326.61 286.12 335.792 301.307 352.011C316.495 335.793 337.739 326.61 359.952 326.657C381.52 326.776 402.155 335.438 417.343 350.745C432.526 366.051 441.026 386.761 440.968 408.323C442.849 475.198 401.219 532.75 317.28 579.217L317.282 579.224Z"
                fill="black"
              />
              <path
                d="M423.815 128.331C423.815 82.4817 399.356 40.1177 359.648 17.191C319.94 -5.73033 271.023 -5.73033 231.315 17.191C191.607 40.1177 167.148 82.483 167.148 128.331V151.664H178.815V128.331C178.815 86.6483 201.05 48.1337 237.148 27.295C273.247 6.45633 317.716 6.45633 353.815 27.295C389.914 48.1337 412.148 86.6497 412.148 128.331V151.664H423.815V128.331Z"
                fill="black"
              />
            </svg>
          </button>
        </NavLink>
      </div>
    </div>
  );
};
