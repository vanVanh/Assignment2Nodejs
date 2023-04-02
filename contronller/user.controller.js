exports.listUser = (req, res, next) => {

    let account = [
        {
            fullname: 'Nguyễn Việt Anh',
            username: 'vanhHutHoa',
            email: 'vanh@gmail.com',
            password: 'vanh1213',
            role: 'admin'
        },
        {
            fullname: 'Ngô Tiến Đạt',
            username: 'datzeru',
            email: 'dat@gmail.com',
            password: 'dat1213',
            role: 'user'
        },
        {
            fullname: 'Trần Thu Hiền',
            username: 'hien1',
            email: 'hien@gmail.com',
            password: 'hien8181',
            role: 'user'
        },
        {
            fullname: 'Nguyễn Chí Thuận',
            username: 'thuanSky',
            email: 'thuan@gmail.com',
            password: 'thuan8120348',
            role: 'user'
        },
        {
            fullname: 'Đào Văn Bình',
            username: 'binhBun',
            email: 'binh@gmail.com',
            password: 'binh123123',
            role: 'admin'
        },
        {
            fullname: 'Nguyễn Huỳnh Tiên',
            username: 'thor',
            email: 'thor@gmail.com',
            password: 'thor242423',
            role: 'user'
        },
        {
            fullname: 'Nguyễn Duy Dưỡng',
            username: 'duong1minute',
            email: 'duong@gmail.com',
            password: 'duong743y127',
            role: 'user'
        },
        {
            fullname: 'Nguyễn Thế Ngọc',
            username: 'ngocBadBoy',
            email: 'ngoc@gmail.com',
            password: 'ngocBadBoy123',
            role: 'user'
        },
    ]

    let role = ['admin', 'user']

    res.render('user/listUser',{msg: account, item: role});
}

exports.addUser = (req, res, next) => {
    res.render('user/addUser')
}