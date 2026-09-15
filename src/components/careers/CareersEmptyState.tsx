export function CareersEmptyState() {
  return (
    <div className="border border-dashed border-black/15 p-16 text-center">
      <h3 className="text-xl font-semibold text-black">No Current Openings</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-black/60">
        There are no active opportunities at the moment. Please check back
        again soon.
      </p>
    </div>
  );
}
