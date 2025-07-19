import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!name || !price || !description || !imageFile) return alert("All fields required");

    setLoading(true);
    const fileExt = imageFile.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;

    const { data: storageData, error: storageError } = await supabase.storage
      .from("product-images")
      .upload(fileName, imageFile);

    if (storageError) {
      console.error(storageError);
      setLoading(false);
      return alert("Image upload failed");
    }

    const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product-images/${fileName}`;

    const { error } = await supabase.from("products").insert([
      { name, price: Number(price), description, image_url: imageUrl },
    ]);

    setLoading(false);
    if (error) {
      console.error(error);
      alert("Failed to save product");
    } else {
      alert("Product saved successfully");
      setName("");
      setPrice("");
      setDescription("");
      setImageFile(null);
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold">Add Product</h1>
      <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} type="number" />
      <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? "Saving..." : "Save Product"}
      </Button>
    </div>
  );
}
