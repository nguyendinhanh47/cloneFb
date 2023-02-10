import { UserModel } from "../models/UserModel"


export const createUser = async (req, res) => {
    const { email, password, fullName, phoneNumber, address, major } = req.body;
    if (!email || !password || !fullName || !phoneNumber || !address || !major) {
        return res.status(400).json({ success: false, message: "Vui long nhap day du thong tin!" })
    }
    //check email
    const checkEmail = await UserModel.findOne({ email });
    if (checkEmail) {
        return res.status(400).json({ success: false, message: "Email da ton tai!" })
    }
    //check phoneNumber
    const checkphoneNumber = await UserModel.findOne({ phoneNumber });
    if (checkphoneNumber) {
        return res.status(400).json({ success: false, message: "So dien thoai da ton tai!" })
    }
    try {
        const newUser = req.body;
        const user = new UserModel(newUser)
        await user.save();

        res.status(200).json({ success: true, message: "Dang ki thanh cong", user : user});
    } catch (error) {
        res.status(500).json({ error: err });
    }
}

export const signIn = () => {
    
}