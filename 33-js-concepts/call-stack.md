Call Stack

```tsx
function three(){
	 console.log('is call');
}

function two(){
	 three();
}

function one(){
		two();
}

function zero(){
	one();
}
```

스택 쌓이는 순서

zero  ⇒ one ⇒ two ⇒ three ⇒ three(delete) ⇒  two(delete) ⇒ one(delete) ⇒ zero(delete)

Call Stack 

기본적으로 프로그램의 위치에 따라 함수 호출을 기록하는 데이터 구조
