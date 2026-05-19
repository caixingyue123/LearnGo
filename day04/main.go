package main

import "fmt"

func main() {
	scores := []int{88, 92, 78, 96, 85}
	fmt.Printf("len:%v,cap:%v\n", len(scores), cap(scores))
	scores = append(scores, 83)
	fmt.Printf("len:%v,cap:%v\n", len(scores), cap(scores))
	names := []string{"Alice", "Bob", "Charlie", "David", "Eve", "Frank"}
	nameScores := make(map[string]int)
	for i := 0;i<len(scores);i++ {
		nameScores[names[i]] = scores[i]
	}
	nameScores["Grace"] = 90
	fmt.Println(nameScores)
	delete(nameScores, "Charlie")
	fmt.Println(nameScores)
	nameScores["Frank"] = 84
	fmt.Println(nameScores)
	fmt.Println(nameScores["David"])
	var average float64
	sum := 0
	max, min := scores[0], scores[0]
	for _, score := range scores {
		if score > max {
			max = score
		}
		if score < min {
			min = score
		}
		sum += score
	}
	average = float64(sum) / float64(len(scores))
	fmt.Println("平均分:", average)
	fmt.Println("最高分:", max)
	fmt.Println("最低分:", min)
}
