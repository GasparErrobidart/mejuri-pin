export default function cleanProduct(product){
  const allowedKeys = [
    "id","name","slug","accurate_name","variant_images"
  ]
  const clean = {}
  allowedKeys.forEach( key => clean[key] = product[key] )
  clean["variant_images"] = clean["variant_images"].slice(0,1)
  return clean
}
