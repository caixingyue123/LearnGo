package main

import "fmt"

func main() {
	const schoolName = "Peking University"
	var name string
	var age int 
	height := 1.75
	isLearningGo := true
	fmt.Println("请输入姓名:")
	fmt.Scan(&name)
	age = 70
	floatage := float64(age)
	strage := string(age)
	fmt.Printf("姓名:%s,年龄:%d,身高:%f,是否学习GO:%v\n",name,age,height,isLearningGo)
	fmt.Printf("%.2f,%s\n",floatage,strage)
}