import { NextPage } from "next";

import Header from "../../components/Marketplace/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen my-8">
        <div className="shadow-xl p-8 rounded-xl flex flex-col w-[60%]">
          <div className="my-2">
            <div className="text-aseel text-2xl font-bold">
              Create Your Account Here
            </div>
            <div className="text-xs text-aseel">
              Sell Your Handmade Products Globally With ASEEL
            </div>
          </div>
          <div className="flex flex-row gap-3 my-2 justify-around">
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              className="border-gray border-2 rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Last Name"
              className="border-gray border-2 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="flex flex-row gap-3 my-2 justify-around">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              className="border-gray border-2 rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              pattern="[0-9]*"
              name=""
              id=""
              placeholder="Phone Number"
              className="border-gray border-2 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="flex flex-row gap-3 my-2 justify-around">
            <select className="border-gray border-2 rounded-lg px-4 py-2 w-full">
              <optgroup label="Select Gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="none">Not Specified</option>
              </optgroup>
            </select>
          </div>

          {/* never expand this part, ever again */}
          <div className="flex flex-row gap-3 my-2 justify-around">
            <select className="border-gray border-2 rounded-lg px-4 py-2 w-full">
              <optgroup label="Select Country">
                <option value="AF">Afghanistan</option>
                <option value="AX">Åland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia &amp; Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="VG">British Virgin Islands</option>
                <option value="BN">Brunei</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="BQ">Caribbean Netherlands</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo - Brazzaville</option>
                <option value="CD">Congo - Kinshasa</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Côte d’Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curaçao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czechia</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="SZ">Eswatini</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard &amp; McDonald Islands</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong SAR China</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="XK">Kosovo</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Laos</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao SAR China</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia</option>
                <option value="MD">Moldova</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar (Burma)</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="KP">North Korea</option>
                <option value="MK">North Macedonia</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territories</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn Islands</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="QA">Qatar</option>
                <option value="RE">Réunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russia</option>
                <option value="RW">Rwanda</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">São Tomé &amp; Príncipe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">
                  South Georgia &amp; South Sandwich Islands
                </option>
                <option value="KR">South Korea</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="BL">St. Barthélemy</option>
                <option value="SH">St. Helena</option>
                <option value="KN">St. Kitts &amp; Nevis</option>
                <option value="LC">St. Lucia</option>
                <option value="MF">St. Martin</option>
                <option value="PM">St. Pierre &amp; Miquelon</option>
                <option value="VC">St. Vincent &amp; Grenadines</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard &amp; Jan Mayen</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syria</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad &amp; Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks &amp; Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UY">Uruguay</option>
                <option value="UM">U.S. Outlying Islands</option>
                <option value="VI">U.S. Virgin Islands</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VA">Vatican City</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Vietnam</option>
                <option value="WF">Wallis &amp; Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </optgroup>
            </select>
          </div>

          <div className="flex flex-row gap-3 my-2 justify-around">
            <input
              type="text"
              name=""
              id=""
              placeholder="City"
              className="border-gray border-2 rounded-lg px-4 py-2 w-full"
            />
          </div>

          <div className="flex flex-row gap-3 my-2 justify-around">
            <input
              type="text"
              name=""
              id=""
              placeholder="Shop Name"
              className="border-gray border-2 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="flex flex-row gap-3 my-2 justify-around">
            <input
              type="url"
              name=""
              id=""
              placeholder="Shop Url"
              className="border-gray border-2 rounded-lg px-4 py-2 w-full"
            />
          </div>
          {/* don't open this either */}
          <div className="flex flex-row gap-3 my-2 justify-around">
            <select className="border-gray border-2 rounded-lg px-4 py-2 w-full">
              <optgroup label="How did you found us?">
                <option value="19653"> Aseel&#039;s Social Media</option>
                <option value="19654">Aseel&#039;s Newsletters</option>
                <option value="19655">Aseel&#039;s Notifications or SMS</option>
                <option value="19656">Aseel&#039;s Blogs</option>
                <option value="19657">Billboards</option>
                <option value="19658">Brochure</option>
                <option value="19659">Friends</option>
                <option value="19660">
                  Word-of-mouth through our Atalan (Volunteers) / our
                  representatives in Exhibitions
                </option>
                <option value="19661">Television</option>
                <option value="19662">Others</option>
              </optgroup>
            </select>
          </div>

          <div className="flex flex-row gap-3 my-2 justify-around">
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="border-gray border-2 rounded-lg px-4 py-2 w-full"
            />
            <input
              type="password"
              pattern=""
              name=""
              id=""
              placeholder="Confirm Password"
              className="border-gray border-2 rounded-lg px-4 py-2 w-full"
            />
          </div>

          <div className="flex flex-row gap-3 my-2 justify-left mx-1">
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className="text-sm font-bold">
              Sign Up for Newsletter
            </label>
          </div>

          <div className="flex flex-row gap-3 my-2 justify-center mx-4">
            <div className="btn btn-primary bg-aseel w-full hover:bg-[#163382]">
              Get Started
            </div>
          </div>
          <div className="flex flex-row gap-3 justify-left mx-4">
            <div className="text-sm">Already have a vendor account?</div>
            <a className="text-sm text-aseel" href="#">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;