<template>
    <div id="life">
        <div>
            <h1>{{headName}}</h1>
        </div>
        <div>
            {{msg}}
        </div>
    </div>
</template>

<script>

    export default {
        name: "LifeCycle",
        data() { // << 컴포넌트에서는 data 속성을 Function 으로 정의해 줘야한다.
            return {
                msg: ''
            }
        },
        props: { // << props는 상위 컴포넌트에서 전달받은 값들을 나타낸다.
            headName: String
        },
        beforeCreate() {
            console.log("1. beforeCreate");
            console.log("beforeCreate 전에 이벤트 및 라이프 사이클 초기화가 실행된다.");
            console.log(" - 아직 DOM 요소에 접근할 수 없다.");
            console.log(" - data 속성과 method 속성도 정의되어 있지 않다.");
        },
        created() {
            console.log("2. created");
            console.log("이제 data 속성과 method 속성이 정의가 되어있다.");
            console.log(" - this.data, this.fetchData()와 같은 로직을 이용해서 정의된 값에 접근이 가능하다.");
            console.log(" - 보통 HTTP 통신을 통해서 데이터를 받아오는 로직을 수행하기에 좋다.");
        },
        beforeMount() {
            console.log("3. beforeMount");
            console.log("el 속성으로 지정된 DOM 요소에 Vue 인스턴스가 부착되기 직전의 단계이다.");
            console.log(" - 화면을 그리지 전에 해야할 로직이 있다면 여기서 하자.");
        },
        mounted() {
            console.log("4. mounted");
            console.log("DOM 요소에 Vue 인스턴스가 부착되고 난 바로 다음이다.");
            console.log(" - 해당 컴포넌트의 화면요소를 제어하는 로직을 수행하기에 적합하다.");
            console.log(" - 다만, 하위 컴포넌트가 DOM 요소에 부착되는 시점과는 다르기 때문에 주의를 요한다.");
            this.msg = "Vue의 라이프 사이클에 대해 알아보자!"
        },
        beforeUpdate() {
            console.log("5. beforeUpdate");
            console.log("인스턴스에 정의한 속성들이 화면에 치환되는 단계이다.");
            console.log("치환된 값은 뷰의 $watch 속성으로 감시되고 있다.");
            console.log("감시하던 값의 변화를 감지하면 반사적으로 반응하여 빠르게 화면을 갱신한다.");
            console.log(" - 변경 예정의 새 데이터에 접근할 수 있다.");
            console.log(" - 즉, 변경 예정 데이터와 관련된 로직을 미리 넣을 수 있다.");
            console.log(" - 단, 여기서 값을 변경하는 로직을 넣으면 화면이 다시 그려지지는 않는다.");
        },
        updated() {
            console.log("6. updated");
            console.log("데이터가 변경되고, 가상 DOM 으로 다시 화면을 그리고 실행되는 단계이다.");
            console.log(" - 데이터 변경 후 화면 요소 제어 로직을 넣기 좋은 단계이다.");
            console.log(" - 여기서 데이터 변경을 하려면 computed, watch 를 사용해야한다. 안그러면 무한루프에 빠진다.");
            console.log(" - 되도록 값의 변경 로직은 beforeUpdate 에서 하자");
            console.log(" - 화면 요소와 관련된 로직만 다루도록 하자");
        },
        beforeDestroy() {
            console.log("7. beforeDestroy");
            console.log("아직 인스턴스에 접근이 가능하기 때문에 인스턴스 데이터를 삭제하기 좋다.");
        },
        destroyed() {
            console.log("8. destroyed");
            console.log("모든 속성이 제거되고 하위 인스턴스 또한 파괴된다.");
        }
    }
</script>

<style scoped>

</style>