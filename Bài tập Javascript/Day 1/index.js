Bài 1
let x=true
let y=true
let z=false

x && y && z --> false
//Kết quả của phép "&&" chỉ đúng khi cả hai vế đều đúng.
//x = true, y = true, nhưng z = false, nên kết quả của phép này là false.

x && y && !z --> true
//"!" là toán tử phủ định. Phủ định z sẽ biến z thành true (vì z = false).
//Vậy phép toán trở thành: true && true && true, kết quả là true.

(x && y) || !z --> true
//x && y = true (vì x và y đều là true).
//!z = true (phủ định của false).
//Vậy phép toán trở thành true || true, và kết quả là true (vì phép "||" đúng khi có ít nhất một giá trị đúng).

x && (y || z) --> true
//y || z = true (vì y = true, nên dù z = false, kết quả của phép "||" vẫn là true).
//Vậy phép toán trở thành true && true, kết quả là true.

x && !(y || z) --> false
//y || z = true (như đã giải thích ở câu trước).
//Phủ định của true là false.
//Vậy phép toán trở thành true && false, và kết quả là false.

x && (y || !z) --> true
//!z = true (phủ định của false).
//y || true = true (vì phép "||" đúng khi có ít nhất một giá trị đúng).
//Vậy phép toán trở thành true && true, kết quả là true.

x && ((y || z) --> true
//y || z = true (vì y = true).
//Vậy phép toán trở thành true && true, và kết quả là true.

Bài 2
let name = 'AAA'
let age = 20
let isGood = true

age + 10 = AAA10
//Vì biến name là chuỗi nên khi thực hiện phép cộng sẽ khiến phép toán gắn liền vào nhau chứ không cộng

age % 3 = NaN
//Vì phép "%" là phép chia số nguyên lất phàn dư nên khi chia chuỗi "AAA"(không phải số) sẽ ra kết quả NaN

let name + ' BBB' = 'AAABBB'
//Vì đây là phép cộng chuỗi nên hai chuỗi sẽ được gắn vào nhau

!isGood = false
//Vì phép "!" là toán tử phủ định nên khiến true thành false

let name == 'aaa' && age >= 20 → false
//Vì phép "&&" chỉ đúng khi cả hai vế đều đúng mà vế trước là false và vế sau cũng là false nên kết quả sẽ là false

let name != 'aaa' && isGood → true
//Vì biến name khác aaa nên vế trước là true và vế sau biến isGood là true nên kết quả sẽ là true

!(age < 10) && !isGood → true
//Vì phép age < 10 là false nhưng phủ định của nó là true mà vế sau biến isGood là true nên kết quả sẽ là true

Bài 3
let a = 10
let b = 20
let c = 30
let d = '40'

a + b + c = 60
//Vì đây là phép cộng số bình thường nên kết qả là 60

a - b / c = 9.33333
//Vì máy tính sẽ hiểu đây là a cộng với b chia cho c thì sẽ thực hiên phép chia trước rồi mới cộng với a

a - (b * c) = -590
//Vì phép b nhân c được để trong ngoặc lên được tính trước sau đó mới trừ nên kết quả là -590

d - (a * b) - c = -190
//Vì trong ngoặc nên phép a nhân b được tính trước sau đó mới trừ và truwfw lần lượt theo thứ tự nên kết quả là -190

a + b + c + d = 6040
//Vì đây là phép cộng mà d là chuỗi nên khi a cộng b cộng c sau đó gắn với d thì kết quả là 6040

d + a + b + c = 40102030
//Vì d là chuỗi nên đây sẽ là phép nối chuỗi vì d đứng đầu

d + a - b + c = 399030
//Vì d là chuỗi nên nối với a sau đó trừ cho b và nối tiếp với c

a - b + d - c = -1070
//Vì d là chuỗi sẽ gắn với phép tính toán bình thường ở trước nó sau đó tính toán bình thường

d - c + a - b = 990
//Vì phép trừ được tính bình thường sau đó nối chuỗi với a rồi lại trừ bình thường

a * b + d * c =  2001200
//Vì d là chuỗi nên phép nhân được thực hiện trước sau đó là nối chuỗi

Bài 4
let x = true
let y = false
let z = 10

x && y → false
//Vì hai vế có mỗi x đúng nên kết quả là false

x && !y → true
//Vì hai vế đều đúng

x && z == 10 → true
//Vì hai vế đều đúng

(x && z == 10) → true
//Vì hai vế đều đúng

!(x && z == 10) → false
//Vì bên trong ngoặc hai vế đều đúng nên hết quả trả ra là true nhưng có phép "!" là toán tử phủ định nên kết quả là false

!(x && z == 50) → true
//Vì bên trong ngoặc là false nên ra ngoài có phpes "!" nên kết quả alaf true

x && y && z == 10 → false
//Vì đây là true&&false&&true nên kết quả là false

x && !y && z == 10 → true
//Vì đây là true&&true&&true nên kết quả là true

x || y || z == 10 → true
//Vì phép "||" chỉ false khi cả hai bên đều là false mà đây là true||false||true nên kết quả là true

(x && y) || z != 10 → false
//Vì bên trong ngoặc là false mà bên ngoài cũng false nên hết quả là false

!(x && z == 10) || y → false
//Vì bên trong ngoặc là true nhưng có phép "!" nên là false mà bên ngoài cũng false nên kết quả là false

Bài 5
let a = 1
let b = '2'
let c = 3
let d = '4'

b + d = 24
//Vì đây là phép nối chuỗi

a + b + c + d = 1234
//Vì đây là phép nối chuỗi

a - b + c - d = -17
//Vì phép trừ tính bình thường sau đó lại nối chuỗi với c và tính toán bình thường

a - b - c + d = -44
//Vì phép trừ tính toán bình thường sau đó nối chuỗi với d

(b + d) - (a + c) = 20
//Vì tính trong ngoặc trước nên phép đầu tiên là nối chuỗi và sau đó tính toán bình thường

(a + b) - (c + d) = -22 
//Vì tính trong ngoặc trước nên cả hai phép là nối chuỗi và sau đó tính toán bình thường
a * c + b * d = 38
//Vì nhân được tính trước sau đó là phép nối chuỗi

-b + d = -24
//Vì đây là phép nối chuỗi

-b - d = -6
//Vì đây là phép tính toán bình thường

-(b + d) = -24
//Vì đây là phép nối chuỗi

Bài 6
let age = 25
let isMarried = false
let isRich = true

age > 25 && isMarried && isRich → false
//Vì đây là false&&false&&true nên kết quả là false

(age <= 25 || isMarried) && isRich → true
//Vì bên trong ngoặc là true nhưng bên ngoài là true nên kết quả là true

(age > 10 || isRich) && isMarried → false
//Vì bên trong ngoặc là true nhưng bên ngoài là false nên kết quả là false

!(age >= 15 && isMarried) && isRich → true
//Vì bên trong ngoặc là false nhưng có phép "!" nên là true mà bên ngoài là true nên kết quả là true

!(age <= 20) || !(isMarried && isRich) → true
//Vì vế trái là true và vế phải là true nên kết quả là true

(age > 8 && !isMarried) || isRich → true
//Vì vế trái là false và vế phải là true mà đây là phép "||" nên kết quả là true

!(age < 8 && !isMarried) || isRich → true
//Vì vế trái là true và vế phải là true nên kết quả là true

(age == 8 && isMarried) || !isRich → true
//Vì vế trái là false và vế phải là true mà đây là phép "||" nên kết quả là true

Bài 7
let a = 11
let b = '22'
let c = 33

a + b = 1122
//Vì đây là phép nối chuỗi

a - c = -22
//Vì đây là phép tính toán bình thường

a + b + c = 112233
//Vì đây là phép nối chuỗi

a + c + b = 4422
//Vì trước chuỗi b là phép tính bình thường

(a + b) % 3 = 0
//Vì đây là phép nối chuỗi và chia lấy phần dư

a * b > 50 → true
//Vì a nhân với chuỗi b bằng 242 lớn hơn 50

a ** b > 100 → true
//Vì 11 mũ 22 lớn hơn 100

a - (b++) == 5 → false
//Vì bên trong ngoặc lấy b trước sau đó mới cộng nên vẫn là 22 và tính bình thường ra là -11 khác 5 nên kết quả là false

a - (++b) == 5 → false
//Vì bên trong ngoặc cộng trước sau đó lây b thì sẽ ra là 23 sau đó tính bình thường ra là -12 khác 5 nên kết quả là false

Bài 8
let isTall = true
let isMuscle = false
let isHandsome = true

isTall && isMuscle → false
!isHandsome → false
!isTall || !isMuscle → false
isTall || !(isMuscle && isHandsome) → true
isMuscle && !(isTall || isHandsome) → false
