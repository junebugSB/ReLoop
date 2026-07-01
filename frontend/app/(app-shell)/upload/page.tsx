import { Button } from "@/app/components/ui/button";

const formFields = [
  { label: "Name", placeholder: "E.g. Linen Overshirt" },
  { label: "Brand", placeholder: "E.g. COS" },
  { label: "Category", placeholder: "Outerwear" },
  { label: "Color", placeholder: "Sage" },
  { label: "Material", placeholder: "Cotton" },
  { label: "Size", placeholder: "M" },
  { label: "Season", placeholder: "Spring" },
  { label: "Occasion", placeholder: "Weekend" },
  { label: "Price", placeholder: "$120" },
  { label: "Purchase date", placeholder: "2026-01-15" },
];

export default function UploadPage() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
        <p className="text-sm font-medium text-[var(--forest)]">Upload clothing</p>
        <h1 className="mt-2 text-3xl font-semibold text-[var(--charcoal)]">Add pieces with ease.</h1>
        <p className="mt-3 max-w-2xl text-sm text-[var(--charcoal)]/70">Bring in a photo, fill in the details, and turn your closet into a beautifully tracked wardrobe.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] border border-dashed border-[var(--forest)]/25 bg-[var(--cream)]/80 p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--forest)] shadow-sm">
            <span className="text-2xl">+</span>
          </div>
          <h2 className="mt-5 text-xl font-semibold text-[var(--charcoal)]">Drag and drop your photo</h2>
          <p className="mt-2 text-sm text-[var(--charcoal)]/70">PNG, JPG, or HEIC up to 10MB.</p>
          <Button className="mt-6">Choose file</Button>
        </div>

        <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
          <div className="grid gap-4 md:grid-cols-2">
            {formFields.map((field) => (
              <label key={field.label} className="space-y-2 text-sm font-medium text-[var(--charcoal)]/80">
                <span>{field.label}</span>
                <input className="h-11 w-full rounded-2xl border border-black/10 bg-[var(--cream)] px-3 outline-none" placeholder={field.placeholder} />
              </label>
            ))}
            <label className="space-y-2 text-sm font-medium text-[var(--charcoal)]/80 md:col-span-2">
              <span>Notes</span>
              <textarea className="min-h-24 w-full rounded-2xl border border-black/10 bg-[var(--cream)] px-3 py-3 outline-none" placeholder="Add styling notes or care reminders." />
            </label>
          </div>
          <div className="mt-6 flex justify-end">
            <Button>Save item</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
