import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Product } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:3001/products";
  router: any;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }
  // update({
  //   id,
  //   product,
  // }: {
  //   id: string;
  //   product: Product;
  // }): Observable<Product> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.put<Product>(url, product);
  // }
  update(id: number, product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Product>(url, product);
  }
}

