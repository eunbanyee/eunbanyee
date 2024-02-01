// shippingCalculator.js

function calculateShippingCost() {
    // 주문 정보 입력 폼에서 값 가져오기
    const orderAmount = parseFloat(document.getElementById('orderAmount').value);
    const isReturnAmount = parseFloat(document.getElementById('isReturn').value);
    const isRemoteArea = document.getElementById('isRemoteArea').checked;

    // 초기 배송비 계산
    let initialShippingCost = 0;
    if (orderAmount >= 50000) {
        initialShippingCost = isRemoteArea ? 2500 : 0;
    }

    // 반품 후 구매확정 금액에 따른 배송비 계산
    let returnShippingCost = 0;
    if (isReturnAmount > 0) {
        returnShippingCost = isReturnAmount >= 50000 ? 2500 : 5000;
    }

    // 최종 배송비 계산
    const totalShippingCost = initialShippingCost + returnShippingCost;

    // 결과 출력
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `최종 배송비: ${totalShippingCost}원`;
}
