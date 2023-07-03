const mealName=document.getElementById("name")
const mealImage=document.getElementById("image")
const mealCook=document.getElementById('cook')
const mealIngredients=document.getElementById("ingredients")
const firstIngredients=document.getElementById("no1")
const secondIngredients=document.getElementById("no2")
const thirdIngredients=document.getElementById("no3")
const fourthIngredients=document.getElementById("no4")
const fifthIngredients=document.getElementById("no5")
const sixthIngredients=document.getElementById("no6")
const seventhIngredients=document.getElementById("no7")
const eightIngredients=document.getElementById("no8")
const nineIngredients=document.getElementById("no9")
const tenIngredients=document.getElementById("no10")
const elevenIngredients=document.getElementById("no11")
const twelveIngredients=document.getElementById("no12")
const thirteenIngredients=document.getElementById("no13")
const fourteenIngredients=document.getElementById("no14")
const fiftenIngredients=document.getElementById("no15")
const sixteenIngredients=document.getElementById("no16")
const seventenIngredients=document.getElementById("no17")
const eighteenIngredients=document.getElementById("no18")
const nineteenIngredients=document.getElementById("no19")
const twentyIngredients=document.getElementById("no20")

const mealName2=document.getElementById("name2")
const mealImage2=document.getElementById("image2")
const mealCook2=document.getElementById('cook2')
const mealIngredients1=document.getElementById("ingredients")
const firstIngredients1=document.getElementById("no1111")
const secondIngredients1=document.getElementById("no1112")
const thirdIngredients1=document.getElementById("no1113")
const fourthIngredients1=document.getElementById("no1114")
const fifthIngredients1=document.getElementById("no1115")
const sixthIngredients1=document.getElementById("no1116")
const seventhIngredients1=document.getElementById("no1117")
const eightIngredients1=document.getElementById("no1118")
const nineIngredients1=document.getElementById("no1119")
const tenIngredients1=document.getElementById("no1110")
const elevenIngredients1=document.getElementById("no111")
const twelveIngredients1=document.getElementById("no112")
const thirteenIngredients1=document.getElementById("no113")
const fourteenIngredients1=document.getElementById("no114")
const fiftenIngredients1=document.getElementById("no115")
const sixteenIngredients1=document.getElementById("no116")
const seventenIngredients1=document.getElementById("no117")
const eighteenIngredients1=document.getElementById("no118")
const nineteenIngredients1=document.getElementById("no119")
const twentyIngredients1=document.getElementById("no120")
console.log(mealName2)
console.log(mealImage2)
console.log(mealCook2)



const mealName3=document.getElementById("name3")
const mealImage3=document.getElementById("image3")
const mealCook3=document.getElementById('cook3')
const mealIngredients3=document.getElementById("ingredients")
const firstIngredients3=document.getElementById("no11111")
const secondIngredients3=document.getElementById("no11122")
const thirdIngredients3=document.getElementById("no11133")
const fourthIngredients3=document.getElementById("no11144")
const fifthIngredients3=document.getElementById("no11155")
const sixthIngredients3=document.getElementById("no1116")
const seventhIngredients3=document.getElementById("no11177")
const eightIngredients3=document.getElementById("no11188")
const nineIngredients3=document.getElementById("no11199")
const tenIngredients3=document.getElementById("no11100")
const elevenIngredients3=document.getElementById("no1111")
const twelveIngredients3=document.getElementById("no1122")
const thirteenIngredients3=document.getElementById("no1133")
const fourteenIngredients3=document.getElementById("no1144")
const fiftenIngredients3=document.getElementById("no1154")
const sixteenIngredients3=document.getElementById("no1166")
const seventenIngredients3=document.getElementById("no1177")
const eighteenIngredients3=document.getElementById("no1188")
const nineteenIngredients3=document.getElementById("no1199")
const twentyIngredients3=document.getElementById("no1202")
console.log(mealName3)
console.log(mealImage3)
console.log(mealCook3)




async function logJSONData() {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const jsonData = await response.json();
  console.log(jsonData.meals[0].strInstructions);
 mealName.innerHTML=jsonData.meals[0].strMeal
 mealImage.src=jsonData.meals[0].strMealThumb
 mealCook.innerHTML=jsonData.meals[0].strInstructions
 firstIngredients.innerHTML=jsonData.meals[0].strIngredient1
 secondIngredients.innerHTML=jsonData.meals[0].strIngredient2
 thirdIngredients.innerHTML=jsonData.meals[0].strIngredient3
 fourthIngredients.innerHTML=jsonData.meals[0].strIngredient4
 fifthIngredients.innerHTML=jsonData.meals[0].strIngredient5
 sixthIngredients.innerHTML=jsonData.meals[0].strIngredient6
 seventhIngredients.innerHTML=jsonData.meals[0].strIngredient7
 eightIngredients.innerHTML=jsonData.meals[0].strIngredient8
 nineIngredients.innerHTML=jsonData.meals[0].strIngredient9
 tenIngredients.innerHTML=jsonData.meals[0].strIngredient10
 elevenIngredients.innerHTML=jsonData.meals[0].strIngredient11
 twelveIngredients.innerHTML=jsonData.meals[0].strIngredient12
 thirteenIngredients.innerHTML=jsonData.meals[0].strIngredient13
 fourteenIngredients.innerHTML=jsonData.meals[0].strIngredient14
 fiftenIngredients.innerHTML=jsonData.meals[0].strIngredient15
 sixteenIngredients.innerHTML=jsonData.meals[0].strIngredient16
 seventenIngredients.innerHTML=jsonData.meals[0].strIngredient17
 eighteenIngredients.innerHTML=jsonData.meals[0].strIngredient18
 nineteenIngredients.innerHTML=jsonData.meals[0].strIngredient19
 twentyIngredients.innerHTML=jsonData.meals[0].strIngredient20

}
logJSONData()


async function logJSONData1() {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const jsonData = await response.json();
  console.log(jsonData.meals[0].strInstructions);
 mealName2.innerHTML=jsonData.meals[0].strMeal
 mealImage2.src=jsonData.meals[0].strMealThumb
 mealCook2.innerHTML=jsonData.meals[0].strInstructions
 firstIngredients1.innerHTML=jsonData.meals[0].strIngredient1
 secondIngredients1.innerHTML=jsonData.meals[0].strIngredient2
 thirdIngredients1.innerHTML=jsonData.meals[0].strIngredient3
 fourthIngredients1.innerHTML=jsonData.meals[0].strIngredient4
 fifthIngredients1.innerHTML=jsonData.meals[0].strIngredient5
 sixthIngredients1.innerHTML=jsonData.meals[0].strIngredient6
 seventhIngredients1.innerHTML=jsonData.meals[0].strIngredient7
 eightIngredients1.innerHTML=jsonData.meals[0].strIngredient8
 nineIngredients1.innerHTML=jsonData.meals[0].strIngredient9
 tenIngredients1.innerHTML=jsonData.meals[0].strIngredient10
 elevenIngredients1.innerHTML=jsonData.meals[0].strIngredient11
 twelveIngredients1.innerHTML=jsonData.meals[0].strIngredient12
 thirteenIngredients1.innerHTML=jsonData.meals[0].strIngredient13
 fourteenIngredients1.innerHTML=jsonData.meals[0].strIngredient14
 fiftenIngredients1.innerHTML=jsonData.meals[0].strIngredient15
 sixteenIngredients1.innerHTML=jsonData.meals[0].strIngredient16
 seventenIngredients1.innerHTML=jsonData.meals[0].strIngredient17
 eighteenIngredients1.innerHTML=jsonData.meals[0].strIngredient18
 nineteenIngredients1.innerHTML=jsonData.meals[0].strIngredient19
 twentyIngredients1.innerHTML=jsonData.meals[0].strIngredient20

}
logJSONData1()


async function logJSONData2() {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const jsonData = await response.json();
  console.log(jsonData.meals[0].strInstructions);
 mealName3.innerHTML=jsonData.meals[0].strMeal
 mealImage3.src=jsonData.meals[0].strMealThumb
 mealCook3.innerHTML=jsonData.meals[0].strInstructions
 firstIngredients3.innerHTML=jsonData.meals[0].strIngredient1
 secondIngredients3.innerHTML=jsonData.meals[0].strIngredient2
 thirdIngredients3.innerHTML=jsonData.meals[0].strIngredient3
 fourthIngredients3.innerHTML=jsonData.meals[0].strIngredient4
 fifthIngredients3.innerHTML=jsonData.meals[0].strIngredient5
 sixthIngredients3.innerHTML=jsonData.meals[0].strIngredient6
 seventhIngredients3.innerHTML=jsonData.meals[0].strIngredient7
 eightIngredients3.innerHTML=jsonData.meals[0].strIngredient8
 nineIngredients3.innerHTML=jsonData.meals[0].strIngredient9
 tenIngredients3.innerHTML=jsonData.meals[0].strIngredient10
 elevenIngredients3.innerHTML=jsonData.meals[0].strIngredient11
 twelveIngredients3.innerHTML=jsonData.meals[0].strIngredient12
 thirteenIngredients3.innerHTML=jsonData.meals[0].strIngredient13
 fourteenIngredients3.innerHTML=jsonData.meals[0].strIngredient14
 fiftenIngredients3.innerHTML=jsonData.meals[0].strIngredient15
 sixteenIngredients3.innerHTML=jsonData.meals[0].strIngredient16
 seventenIngredients3.innerHTML=jsonData.meals[0].strIngredient17
 eighteenIngredients3.innerHTML=jsonData.meals[0].strIngredient18
 nineteenIngredients3.innerHTML=jsonData.meals[0].strIngredient19
 twentyIngredients3.innerHTML=jsonData.meals[0].strIngredient20

}
logJSONData2()
