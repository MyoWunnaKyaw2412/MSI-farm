import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmservicesService } from '../services/farmservices.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private currentroute: ActivatedRoute,private farmservices:FarmservicesService){}
   
  productfarmid! : string
  productName!: String 
  image!: String
  from!: String 
  nutrients!: String
  quantity!: String 
  price!: String 
  organic!: boolean
  description!: String
  

  ngOnInit(): void {
    const productid = this.currentroute.snapshot.params["productid"]
    console.log(productid);
    var indexId = parseInt (productid)
    console.log(indexId)

     this.productName = this.farmservices.Apifarm[indexId].productName;
     this.image =this.farmservices.Apifarm[indexId].image;
     this.from = this.farmservices.Apifarm[indexId].from;
     this.nutrients = this.farmservices.Apifarm[indexId].nutrients;                                                                                
     this.quantity = this.farmservices.Apifarm[indexId].quantity;
     this.price = this.farmservices.Apifarm[indexId].price;
     this.organic = this.farmservices.Apifarm[indexId].organic;
     this.description = this.farmservices.Apifarm[indexId].description;
  }
  // ngOnInit(): void {
  //   const productid = this.currentroute.snapshot.params['productid']
  //   if (productid == 0){
  //    this.productName = "Fresh Avocados",
  //    this.image = "🥑",
  //    this.from ="Spain",
  //    this.nutrients = "Vitamin B, Vitamin K",                                                                                 
  //    this.quantity ="4 🥑",
  //    this.price = "6.50",
  //    this.organic = "true",
  //    this.description = "A ripe avocado yields to gentle pressure when held in the palm of the hand and squeezed. The fruit is not sweet, but distinctly and subtly flavored, with smooth texture. The avocado is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content. Generally, avocado is served raw, though some cultivars, including the common 'Hass', can be cooked for a short time without becoming bitter. It is used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices."
  //   }
  //   else if (productid == 1){
  //      this.productName ="Goat and Sheep Cheese",
  //      this.image = "🧀",
  //      this.from  = "Portugal",
  //      this.nutrients = "Vitamin A, Calcium",
  //      this.quantity ="250g",
  //      this.price = "5.00",
  //      this.organic =  "false",
  //      this.description = "Creamy and distinct in flavor, goat cheese is a dairy product enjoyed around the world. Goat cheese comes in a wide variety of flavors and textures, from soft and spreadable fresh cheese to salty, crumbly aged cheese. Although it’s made using the same coagulation and separation process as cheese made from cow’s milk, goat cheese differs in nutrient content."
  //   }
  //   else if(productid == 2){
  //     this.productName ="Apollo Broccoli",
  //     this.image = "🥦",
  //     this.from  = "Portugal",
  //     this.nutrients = "Vitamin C, Vitamin K",
  //     this.quantity ="3 🥦",
  //     this.price =  "5.50",
  //     this.organic = "true",
  //     this.description = "Broccoli is known to be a hearty and tasty vegetable which is rich in dozens of nutrients. It is said to pack the most nutritional punch of any vegetable. When we think about green vegetables to include in our diet, broccoli is one of the foremost veggies to come to our mind. Broccoli is a cruciferous vegetable and part of the cabbage family, which includes vegetables such as Brussel sprouts and kale. Although the tastes are different, broccoli and these other vegetables are from the same family."
  //   }
  //   else if (productid == 3){
  //     this.productName = "Baby Carrots",
  //     this.image ="🥕",
  //     this.from  = "France",
  //     this.nutrients ="Vitamin A, Vitamin K",
  //     this.quantity = "20 🥕",
  //     this.price =  "3.00",
  //     this.organic = "true",
  //     this.description ="The carrot is a root vegetable that is often claimed to be the perfect health food. It is crunchy, tasty and highly nutritious. Carrots are a particularly good source of beta-carotene, fiber, vitamin K, potassium and antioxidants. Carrots have a number of health benefits. They are a weight loss friendly food and have been linked to lower cholesterol levels and improved eye health."
  //   }
  //   else if (productid == 4 ){
  //     this.productName = "Sweet Corncobs",
  //     this.image = "🌽",
  //     this.from  =  "Germany",
  //     this.nutrients = "Vitamin C, Magnesium",
  //     this.quantity = "2 🌽",
  //     this.price =  "2.00",
  //     this.organic = "false",
  //     this.description = "Also known as maize, corn is one of the most popular cereal grains in the world. Popcorn and sweet corn are commonly eaten varieties, but refined corn products are also widely consumed, frequently as ingredients in foods. These include tortillas, tortilla chips, polenta, cornmeal, corn flour, corn syrup, and corn oil. Whole-grain corn is as healthy as any cereal grain, rich in fiber and many vitamins, minerals, and antioxidants."
  //   }
  // }
}
