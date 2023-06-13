# ShoppeClone
Setup MyConstants.js
const MyConstants = {
    DB_SERVER: 'shoppeclone.w14pp4b.mongodb.net',
    DB_USER: 'huatrungkien126',
    DB_PASS: 'kien19032002',
    DB_DATABASE: 'shoppeClone',
# Gmail mail service
    EMAIL_USER: 'put your email here', 
    EMAIL_PASS: 'password',
Vào link này https://security.google.com/settings/security/apppasswords
![Screenshot](image.png)
Chọn Khác (Tên tuỳ chỉnh) đặt tên cho nó là nodemailer sau đó bấm Tạo và nó sẽ ra 1 chuỗi password
![Screenshot](image.png)
copy và paste cái password vào chỗ EMAIL_PASS
# JWT
    JWT_SECRET: '<jwt_secret>',
    JWT_EXPIRES: '3600000', // in milliseconds 3600000 = 1 năm
};
https://security.google.com/settings/security/apppasswords
