export type Snippet = {
  id: number;
  title: string;
  description: string;
  code: string;
};

export const Codes: Snippet[] = [
  {
    id: 1,
    title: "1) Algorithm",
    description: "linear search",
    code: `

Step 1: Start

Step 2: Declare array1[1...n], key, found = 0

Step 3: Input n, array[1...n], key

Step 4: For i = 0 to n-1
            If array1[i] == key
                found = 1
                Break

Step 5: If found == 1
            Output "Key found"
        Else
            Output "Key not found"

Step 6: End
  }
}`,
  },
  {
    id: 2,
    title: "2) Algorithm",
    description: "bubble sort",
    code: `

Step 1: Start

Step 2: Declare array1[1...n], temp

Step 3: Input n and array1[1...n]

Step 4: For i = 0 to n-2
            For j = 0 to n-2-i 
                If array1[j] > array1[j+1]
                    temp = array1[j]
                    array1[j] = array1[j+1]
                    array1[j+1] = temp

Step 5: Output the sorted array

Step 6: End
  }
}`,
  },
  {
    id: 3,
    title: "3) Algorithm",
    description: "binary search",
    code: `

Step 1: Start

Step 2: Declare array1[1...n], key, left = 0, right = n-1, found = 0

Step 3: Input n, sorted array1[1...n], and key

Step 4: While left <= right
            middle = left + (right - left) / 2

            If array1[middle] == key
                found = 1
                Break

            Else if array1[middle] < key
                left = middle + 1

            Else
                right = middle - 1

Step 5: If found == 1
            Output "Key found"
        Else
            Output "Key not found"

Step 6: End
  }
}`,
  },
  {
    id: 4,
    title: "4) Sorting",
    description: "algorithm: bubble sort (array)",
    code: `#include<iostream>
using namespace std;
int main(){
    int nums[] = {2,7,3,11,1,5};

    for(int i=0; i<sizeof(nums)/4; i++){
        cout<<nums[i]<<",";
    }

    int count=0;
    int temp=0;

    cout<<endl;

    for(int i = 0; i<(sizeof(nums)/sizeof(nums[0]))-1 ;i++){
        for(int j =1; j<(sizeof(nums)/4)-i;j++){
            if(nums[i]>nums[i+j]){
                temp=nums[i];
                nums[i]=nums[j+i];
                nums[j+i]=temp;
            }
        }
        count++;
    }


    for(int i=0; i<sizeof(nums)/sizeof(nums[0]); i++){
        cout<<nums[i]<<",";
    }
    cout<<endl<<count;

}`,
  },
  {
    id: 5,
    title: "5) Sorting & Searching",
    description: "algorithm: sort + binary search",
    code: `#include <iostream>
using namespace std;
int main(){
    int inputs;
    cin>>inputs;

    int number[inputs];

    for(int i=0;i<inputs;i++){
        cin>>number[i];
    }

    for (int i=0; i<(sizeof(number)/4)-1; i++){
        for (int j =i+1; j<=(sizeof(number)/4)-1;j++){
            if (number[i] > number[j]){
                int temp = number[i];
                number[i] = number[j];
                number[j] = temp;
            };
        };
    };

    for(int i = 0; i<(sizeof(number)/4); i++){
        cout << number[i] <<",";
    }

    cout<<endl;

    int find;
    cout<<"find ? ";
    cin>>find;
    int low =0;
    int high = sizeof(number)/4-1;

    while(low<=high){
        int middle = low+ (high-low)/2;
        if(number[middle]<find){
            low = middle +1;
        }
        else if (number[middle] >find){
            high = middle -1;
        }
        else{
            cout<< middle +1 <<endl;
            break;
        }
    }

    if(low>high){
        cout<<"not found"<<endl;
    }
}`,
  },
  {
    id: 6,
    title: "6) Sorting",
    description: "algorithm: bubble sort (selection-style)",
    code: `#include <iostream>
using namespace std;
int main(){
    int number[] = {10,5,3,4,19,7,29,9,1,2,6};
int count =0;
    cout << sizeof(number)<<", size of given array in 4 bytes"<<endl<<endl;

    for(int i=0;i<(sizeof(number)/4);i++){
        cout<<number[i]<<", ";
    }

    cout<<endl;
    cout<<endl;

    for (int i=0; i<(sizeof(number)/4)-1; i++){
        for (int j =i+1; j<(sizeof(number)/4);j++){
            if (number[i] > number[j]){
                int temp = number[i];
                number[i] = number[j];
                number[j] = temp;
            };
            
        };
         count++;
    };

    for(int i=0;i<(sizeof(number)/4);i++){
        cout<<number[i]<<", ";
    }
    cout<<count;

}`,
  },
  {
    id: 7,
    title: "7) Matrix",
    description: "sum of all matrix elements",
    code: `#include <bits/stdc++.h>
using namespace std;

int main(){

    int r=2,c=2, sumOfAll = 0;
    int mat[r][c];

    int k= 0;
    for(int i=0; i<r; i++){
        for(int j=0; j<c; j++){
            mat[i][j]=++k;
        }
    }

    for(int i=0; i<r; i++){
        for(int j=0; j<c; j++){
            cout<<mat[i][j]<<" ";
        }
        cout<<endl;
    }

    for(int i=0; i<r; i++){
        for(int j=0; j<c; j++){
            sumOfAll+= mat[i][j];
        }
    }

    cout<<sumOfAll;

    return 0;
}`,
  },
  {
    id: 8,
    title: "8) Matrix",
    description: "sum of upper and lower triangle",
    code: `#include <bits/stdc++.h>
using namespace std;

int main(){

    int r,c, upperTriangleSum=0, lowerTriangleSum=0;
    cin>>r>>c;
    int matrix[r][c];

    for(int i=0;i<r;i++){
        for(int j=0;j<c;j++){
            cin>>matrix[i][j];
        }
    }

    for(int i=0;i<r;i++){
        for(int j=0+i;j<c;j++){
            upperTriangleSum+=matrix[i][j];
        }
    }

    for(int i=0;i<r;i++){
        for(int j=0;j<=i;j++){
            lowerTriangleSum+=matrix[i][j];
        }
    }

    cout<<upperTriangleSum<<endl;
    cout<<lowerTriangleSum<<endl;


    return 0;
}`,
  },
  {
    id: 9,
    title: "9) Matrix",
    description: "check if two matrices are identical",
    code: `#include <bits/stdc++.h>
using namespace std;

int main(){
    int r1, c1;
    int r2, c2;

    cout << "Enter the number of rows and columns of first matrix: ";
    cin >> r1 >> c1;
    int mat1[r1][c1];

    cout << "Enter the number of rows and columns of second matrix: ";
    cin >> r2 >> c2;
    int mat2[r2][c2];

    if (c1 !=c2 || r1!=r2) {
        cout << "Matrix dimensions must be similar to be identical." << endl;
        return 1;
    }

    cout << "Enter the elements of the first matrix: ";
    for (int i = 0; i < r1; ++i) {
        for (int j = 0; j < c1; ++j) {
            cin >> mat1[i][j];
        }
    }

    cout << "Enter the elements of the second matrix: ";
    for (int i = 0; i < r2; ++i) {
        for (int j = 0; j < c2; ++j) {
            cin >> mat2[i][j];
        }
    }

    int found=0;

    for(int i=0;i<r1;i++){
        for(int j=0;j<c1;j++){
            if(mat1[i][j]!=mat2[i][j]){
                found = 1;
                break;
            }
        }
    }

        if(found){
            cout<<"Matrices are identical";
        } else {
            cout<<"Matrices arent identical";
        }
        
    return 0;
}`,
  },
  {
    id: 10,
    title: "10) Matrix",
    description: "find max, min, and key position in matrix",
    code: `#include <bits/stdc++.h>
using namespace std;

int main(){

    int r,c,maxpos[2],minpos[2],found=0,foundpos[2];
    cin>>r>>c;
    int matrix[r][c];

    for(int i=0;i<r;i++){
        for(int j=0;j<c;j++){
            cin>>matrix[i][j];
        }
    }

    for(int i=0;i<r;i++){
        for(int j=0;j<c;j++){
            cout<<matrix[i][j]<<" ";
        }
        cout<<endl;
    }

    // let position 0,0 be max and min
    int max=matrix[0][0],min=matrix[0][0];

    int key;
    cin>>key;

    
    for(int i=0;i<r;i++){
        for(int j=0;j<c;j++){
            // finding maximum
            if(matrix[i][j]>max){
                max=matrix[i][j];
                maxpos[0]=i;
                maxpos[1]=j;
            }
            // finding minimum
            if(matrix[i][j]<min){
                min=matrix[i][j];
                minpos[0]=i;
                minpos[1]=j;
            }
            if(matrix[i][j]==key){
                found=1;
                foundpos[0]=i;
                foundpos[1]=j;
            }
        }
    }


    if(found){
        cout<<"key found in position: ("<<foundpos[0]+1<<","<<foundpos[1]+1<<")"<<endl;
    }

        cout<<"Max value is: "<<max<<". Position: ("<<maxpos[0]+1<<","<<maxpos[1]+1<<")"<<endl;
        cout<<"Min value is: "<<min<<". Position: ("<<minpos[0]+1<<","<<minpos[1]+1<<")"<<endl;
    
    
        return 0;
}`,
  },
  {
    id: 11,
    title: "11) Matrix",
    description: "matrix multiplication",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int r1, c1;
    int r2, c2;

    cout << "Enter the number of rows and columns of first matrix: ";
    cin >> r1 >> c1;
    int mat1[r1][c1];

    cout << "Enter the number of rows and columns of second matrix: ";
    cin >> r2 >> c2;
    int mat2[r2][c2];

    if (c1 != r2) {
        cout << "Matrices cannot be multiplied as they have incompatible dimensions." << endl;
        return 1;
    }

    cout << "Enter the elements of the first matrix: ";
    for (int i = 0; i < r1; ++i) {
        for (int j = 0; j < c1; ++j) {
            cin >> mat1[i][j];
        }
    }

    cout << "Enter the elements of the second matrix: ";
    for (int i = 0; i < r2; ++i) {
        for (int j = 0; j < c2; ++j) {
            cin >> mat2[i][j];
        }
    }

    int mult[r1][c2];

    for (int i = 0; i < r1; ++i) {
        for (int j = 0; j < c2; ++j) {
            mult[i][j] = 0;
            for (int k = 0; k < c1; ++k) {
                mult[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
    }

    for (int i = 0; i < r1; ++i) {
        for (int j = 0; j < c2; ++j) {
            cout << mult[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}`,
  },
  {
    id: 12,
    title: "12) Matrix",
    description: "matrix subtraction",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int r1, c1;
    int r2, c2;

    cout << "Enter the number of rows and columns of first matrix: ";
    cin >> r1 >> c1;
    int mat1[r1][c1];

    cout << "Enter the number of rows and columns of second matrix: ";
    cin >> r2 >> c2;
    int mat2[r2][c2];

    if (r1 != r2 || c1 != c2) {
        cout << "Matrices cannot be added as they have different dimensions." << endl;
        return 0;
    }

    cout << "Enter the elements of the first matrix: ";
    for (int i = 0; i < r1; ++i) {
        for (int j = 0; j < c1; ++j) {
            cin >> mat1[i][j];
        }
    }

    cout << "Enter the elements of the second matrix: ";
    for (int i = 0; i < r2; ++i) {
        for (int j = 0; j < c2; ++j) {
            cin >> mat2[i][j];
        }
    }

    int sum[r1][c1];
    for (int i = 0; i < r1; ++i) {
        for (int j = 0; j < c1; ++j) {
            sum[i][j] = mat1[i][j] - mat2[i][j];
        }
    }

    cout << "The difference of the two matrices is: " << endl;
    for (int i = 0; i < r1; ++i) {
        for (int j = 0; j < c1; ++j) {
            cout << sum[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}`,
  },
  {
    id: 13,
    title: "13) Matrix",
    description: "matrix transpose",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cout << "Enter the number of rows and columns of the matrix: ";
    cin >> r >> c;
    int mat[r][c];

    cout << "Enter the elements of the matrix: ";
    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            cin >> mat[i][j];
        }
    }

    cout << "The transpose of the matrix is: " << endl;
    for (int j = 0; j < c; ++j) {
        for (int i = 0; i < r; ++i) {
            cout << mat[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}`,
  },
  {
    id: 14,
    title: "14) Matrix",
    description: "sum of border elements",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c, BorderSum = 0;
    cin >> r >> c;
    int matrix[r][c];

    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            cin >> matrix[i][j];
        }
    }

    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }

    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            if (i == 0) {
                BorderSum += matrix[i][j];
            } else if (i != 0 && i != r - 1 && (j == 0 || j == c - 1)) {
                BorderSum += matrix[i][j];
            } else if (i == r - 1) {
                BorderSum += matrix[i][j];
            }
        }
    }

    cout << BorderSum << endl;
    return 0;
}`,
  },
  {
    id: 15,
    title: "15) Matrix",
    description: "sum of each column",
    code: `#include <bits/stdc++.h>
using namespace std;

int main(){

    int r=3,c=3, sumCol[c];
    int mat[r][c];

    int k= 0;
    for(int i=0; i<r; i++){
        for(int j=0; j<c; j++){
            mat[i][j]=++k;
        }
    }

    for(int i=0; i<r; i++){
        for(int j=0; j<c; j++){
            cout<<mat[i][j]<<" ";
        }
        cout<<endl;
    }

    for(int i=0; i<r; i++){
        sumCol[i]=0;
        for(int j=0; j<c; j++){
            sumCol[i]+=mat[j][i];
        }
    }

    for(int j=0; j<c; j++){
        cout<<"SUm of col "<<j<<" : "<<sumCol[j]<<endl;
    }


    return 0;
}`,
  },
  {
    id: 16,
    title: "16) Matrix",
    description: "sum of diagonal elements",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c, DiagonalSum = 0;
    cin >> r >> c;
    int matrix[r][c];

    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            cin >> matrix[i][j];
        }
    }

    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }

    // middle diagonal er sum
    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            if (i == j) {
                DiagonalSum += matrix[i][j];
                break;
            }
        }
    }

    // nicher diagonal er sum
    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            if (i == j+1) {
                DiagonalSum += matrix[i][j];
                break;
            }
        }
    }

    // uporer diagonal er sum
    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            if (i == j) {
                DiagonalSum += matrix[i][j];
                break;
            }
        }
    }
    
    cout << "Diagonal Sum : " << DiagonalSum << endl;
    return 0;
}`,
  },
  {
    id: 17,
    title: "17) Matrix",
    description: "matrix addition",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int r1, c1;
    int r2, c2;

    cout << "Enter the number of rows and columns of first matrix: ";
    cin >> r1 >> c1;
    int mat1[r1][c1];

    cout << "Enter the number of rows and columns of second matrix: ";
    cin >> r2 >> c2;
    int mat2[r2][c2];

    if (r1 != r2 || c1 != c2) {
        cout << "Matrices cannot be added as they have different dimensions." << endl;
        return 0;
    }

    cout << "Enter the elements of the first matrix: ";
    for (int i = 0; i < r1; ++i) {
        for (int j = 0; j < c1; ++j) {
            cin >> mat1[i][j];
        }
    }

    cout << "Enter the elements of the second matrix: ";
    for (int i = 0; i < r2; ++i) {
        for (int j = 0; j < c2; ++j) {
            cin >> mat2[i][j];
        }
    }

    int sum[r1][c1];
    for (int i = 0; i < r1; ++i) {
        for (int j = 0; j < c1; ++j) {
            sum[i][j] = mat1[i][j] + mat2[i][j];
        }
    }

    cout << "The sum of the two matrices is: " << endl;
    for (int i = 0; i < r1; ++i) {
        for (int j = 0; j < c1; ++j) {
            cout << sum[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}`,
  },
  {
    id: 18,
    title: "18) Matrix",
    description: "sum of each row",
    code: `#include <bits/stdc++.h>
using namespace std;

int main(){

    int r=3,c=3, sumRow[r];
    int mat[r][c];

    int k= 0;
    for(int i=0; i<r; i++){
        for(int j=0; j<c; j++){
            mat[i][j]=++k;
        }
    }

    for(int i=0; i<r; i++){
        for(int j=0; j<c; j++){
            cout<<mat[i][j]<<" ";
        }
        cout<<endl;
    }

    for(int i=0; i<r; i++){
        sumRow[i]=0;
        for(int j=0; j<c; j++){
            sumRow[i]+=mat[i][j];
        }
    }

    for(int i=0; i<r; i++){
        cout<<"SUm of row "<<i<<" : "<<sumRow[i]<<endl;
    }


    return 0;
}`,
  },
  {
    id: 19,
    title: "19) Algorithm",
    description: "linear search",
    code: `#include <bits/stdc++.h>
using namespace std;

int main(){

    int n;
    cout<<"Enter total amount of numbers to be inputted: "; cin>>n;   

    int arr[n];

    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int key;
    cout<<"enter key to find: "; cin>>key;

    for(int i=0;i<n;i++){
        if(arr[i]==key){
            cout<<"found key";
            break;
        } else if(i==n-1) {
            cout<<"key not found";
        }
    }

    return 0;
}`,
  },
  {
    id: 20,
    title: "20) Algorithm",
    description: "ternary search",
    code: `#include <bits/stdc++.h>
using namespace std;

int main(){

    int arr[10]= {1,2,3,4,5,6,7,8,9,10};

    int find = 4;

    int low=0;
    int high = 5-1;

    while(low<high){
        int mid1 = low + (high - low)/3;
        int mid2 = high - (high - low)/3;

        if(find<arr[mid1]){
            high=mid1-1;
        } else if (find>arr[mid2]){
            low = mid2+1;
        } else if(arr[mid1]== find){
            cout<<mid1;
            break;
        } else if(arr[mid2]== find){
            cout<<mid2;
            break;
        } else {
            low = mid1+1;
            high = mid2-1;
        }
    }

    return 0;
}`,
  },
]