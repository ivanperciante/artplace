const path = require('path')
const db = require('../src/database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Products = db.Product;
const Category = db.Category;

const productController = {
    productDetail: (req, res) => {
        let productId = req.params.id;

        Products.findByPk(productId)
        .then((product)=>{
            res.render('productDetail',{ product: product })
        })
    },
    productsList: (req, res) => {
        Products.findAll()
        .then(products=>(res.render('productsList', { products: products })))
    },

    productRegister: (req, res) => {

        Category.findAll()
        .then((categories)=>{

            res.render('productRegister', {categories:categories})
        })
    },
    productCreate: (req, res) => {

        // let fileOriginalName = req.files[0].originalname


        // if(fileOriginalName.includes('jpg' || 'png' || 'jpeg' || 'gif' )){
        //     return res.render('/products/create', {errors:{
        //         image: {
        //             msg: "La imagen debe ser JPG, PNG, JPEG o GIF"
        //         }
        //     }})
        // }

        let img1
        let img2
        let img3
        if (req.files.length == 3) {
            img1 = req.files[0].filename;
            img2 = req.files[1].filename;
            img3 = req.files[2].filename;
        }
        else if (req.files.length == 2) {
            img1 = req.files[0].filename
            img2 = req.files[1].filename
            img3 = req.files[1].filename
        }
        else {
            img1 = req.files[0].filename
            img2 = req.files[0].filename
            img3 = req.files[0].filename
        }


        const newProduct = {
            ...req.body,
            img1: img1,
            img2: img2,
            img3: img3,
        }

        Products.create(newProduct)
        .then(()=>{
            res.redirect('/products')
        })
    },

    productEdit: (req, res) => {

        const id = req.params.id;
        // let productToEdit = products.find(product => {
        //     if (product.id === +id) {
        //         return product
        //     }
        // })


        // //else{

        // // Usar el "name" del imput de la vista para encontrar o identificar la imagen que el usuario desea cambiar.
        // productToEdit = {
        //     id: productToEdit.id,
        //     ...req.body,
        //     img1: productToEdit.img1,
        //     img2: productToEdit.img2,
        //     img3: productToEdit.img3
        // }
        let img1;

        let img2;

        let img3;

        if (req.files.length) {
            req.files.forEach(file => {
                let { fieldname } = file
                switch (fieldname) {
                    case "img1":
                        img1 = file.filename
                        break;
                    case "img2":
                        img2 = file.filename
                        break;
                    case "img3":
                        img3 = file.filename
                        break;
                    default:
                        break;
                }
            })
        }

        Products.update({
            ...req.body
        },{
            where:{
                id: id
            }
        })
        
        .then(()=>{

            res.redirect("/products")

        })

        // let productEdited = products.map(product => {

        //     if (product.id == productToEdit.id) {
        //         return product = { ...productToEdit }
        //     }

        //     return product
        // })

        // fs.writeFileSync(productsPath, JSON.stringify(productEdited, null , " "))

    },

    edit: (req, res) => {
        const id = req.params.id;
        //Category.findAll()
        Products.findByPk(id)
        .then((product)=>{

            res.render("productEdit", { product: product })
        })

    }, 
    destroy : (req, res) => {
		
		let idproducto = req.params.id;
		//let newProducts=products.filter(product => product.id != idproducto);
	
		//fs.writeFileSync(productsPath, JSON.stringify(newProducts, null , " "))

        Products.destroy({
            where:{
                id:idproducto
            }
        })
        
        .then(()=>{

            res.redirect('/');
            
        })


	},
    promotions: (req,res) =>{
        Products.findAll({
            order:[['price', 'ASC']],
            limit:6
        })
        .then((products)=>{
            res.render('promotion', {products:products})
        })
    },
    search: (req,res) =>{
        let inputToSearch = req.body.searchForm
        Products.findAll({
            where:{
                productName: {
                    [Op.like]: `%${inputToSearch}%`
                }
            }})
            .then((products)=>{
                res.render('searchResults', {products:products})
            })
    }
}
module.exports = productController;