import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div className="">
            <div className=" mb-9">
                <div className="">
                    <h2 className="text-xl font-bold mb-5">Login With</h2>
                    <button className="btn btn-wide mb-3 btn-outline"><FaGoogle /> Login With Google</button>
                    <button className="btn btn-wide btn-outline"><FaGithub /> Login With GitHub</button>
                </div>
            </div>

            <div className=" mb-6">
                <div className="">
                    <h2 className="text-xl font-bold mb-5">Finde Us On</h2>

                    <a href="" className="flex gap-3 items-center border rounded-t-lg p-5">
                        <FaFacebookF className="bg-gray-200 text-2xl rounded-full" />
                        <span>Facebook</span>
                    </a>
                    <a href="" className="flex gap-3 items-center border-x p-5">
                        <FaTwitter className="bg-gray-200 text-2xl rounded-full" />
                        <span>Facebook</span>
                    </a>
                    <a href="" className="flex gap-3 items-center border rounded-b-lg p-5">
                        <FaInstagram className="bg-gray-200 text-2xl rounded-full" />
                        <span>Facebook</span>
                    </a>
                </div>
            </div>

            <div className="p-4 rounded-md bg-slate-200 ">
                <div className="">
                    <h2 className="text-xl font-bold mb-5">Q Zone</h2>

                    <div className="space-y-5">
                        <img src={qZone1} alt="" />
                        <img src={qZone2} alt="" />
                        <img src={qZone3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;