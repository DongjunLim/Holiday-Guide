![KakaoTalk_Photo_2020-04-02-15-59-55](https://user-images.githubusercontent.com/40556417/78219998-ac9ff980-74fb-11ea-800f-57de968e31b7.png)
# Holiday-Guide 
공휴일과 관련된 정보를 알려주는<br>
SK Nugu 음성 서비스 어플리케이션 API 서버

## 👨‍👩‍👧‍👦 Contribution

### VUX 기획

김지현

하영은

### 서버

박상윤 [(syunyun)](https://github.com/syunyun)

임동준 [(DongjunLim)](https://github.com/DongjunLim)

## 주요기능
1. 공휴일 날짜 정보 제공<br>
2. 연별 공휴일 갯수 정보 제공<br>
3. 이틀 이상 쉬는 장기연휴 정보 제공




## :orange_book: terminology

 | 영문명 | 설명  |
 | --- | --- |
| Intent | 사용자의 발화 의도 |
| Entity| 사용자의 Intent에서 처리하기 원하는 개체 |
| Action | Intent에 적절한 응답 |


<br/>
<br/>

## :computer: Server Environment
운영 OS: Ubuntu 16.04<br>
운영 DB: MySQL Community<br>
개발 언어: Node.js<br>
미들웨어 : Sequelize, Express.js, Nugu kit...<br>


<br/>
<br/>

## :computer: Service Architecture
![Holiday-Guide](https://user-images.githubusercontent.com/40556417/78224879-3fdd2d00-7504-11ea-86a7-500d3f516ca4.png)


<br/>
<br/>

### :running: How to work egg-onion service?

`공휴일 계산기 켜주세요`라는 사용자 Intent에 의해`welcome.with.NUGU.INTENT.open`액션이 실행되면서  Holiday-Guide 서비스가 시작이 됩니다. 공휴일 계산기가 시작되면 사용자는 연별 연휴갯수, 공휴일 날짜 등을 물어볼 수 있습니다.

사용자는 `연휴 알려줘` intent를 통해 `answer.countHoliday` Action을 실행한 후 `올해`, `내년`등의 발화로 알고 싶은 연도의 `Entity`를 Server에 전송합니다.
`Back-end Proxy Server`는 발화 연도의 해당하는 해의 공휴일 갯수를 알려줍니다.<br><br> 

이틀 이상의 연휴를 알고 싶으면 `연휴 알려줘` 라고 다시 말하면 
`Back-end Proxy Server`는 주말을 포함하여 3일 이상 연속으로 쉬는 연휴를 정리해 사용자에게 알려줍니다.

<br/>
<br/>

### NUGU Play Builder 

NUGU Play Builder의 play구조는 아래와 같습니다.

~~~
welcome.with.NUGU.INTENT.open  : 서비스 시작 액션
answer.whenHoliday : 공휴일 날짜를 알려주는 액션
asnwer.longHoliday : 이틀 이상 쉬는 장기연휴를 알려주는 액션
answer.slotFilling_YearMonth : 연별 공휴일을 알려주는 액션
Usersay.thankyou : NUGU와 대화 종료
~~~


<br/>
<br/>



