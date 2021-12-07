import { Product } from "./../product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.product = { name: "" };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.productService.readById(id).subscribe((product) => {
        this.product = product;
      });
    }
  }

  updateProduct(): void {
    console.log("outracoisa", this.product);
    const { id } = this.product;
    if(id){
      this.productService
      .update(id, this.product)
      .subscribe(() => {
        this.productService.showMessage("Produto atualizado com sucesso!");
        this.router.navigate(["/products"]);
      });
    }
    
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
