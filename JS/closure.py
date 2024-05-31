def wrapper():
    # << 클로저 시작
    value_list = []   # 함수내 전역 리스트
    value_float = 0.

    def closer_function(new_value):
        print('------------------------')
        print('   1. ', value_list)
        #print('   2. ', value_float)  # 에러 o UnboundLocalError: local variable 'value_float' referenced before assignment
        nonlocal value_float
        print('   2. ', value_float)   # 에러 x
        value_list.append(new_value)  # value_list 는 자유 변수가 됨
        value_float = new_value
        return value_list, value_float
    # 클로저 끝 >>
    
    return closer_function  # 함수 포인터를 반환

if __name__ == '__main__':
    closer_object = wrapper()
    print(closer_object(11))
    print(closer_object(12))
    print(closer_object(14))
    print(closer_object(17))