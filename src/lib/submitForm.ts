export interface SubmitPayload {
  formType: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  extra?: string;
  cart?: any[];
}

export async function submitForm(payload: SubmitPayload) {
  await fetch(import.meta.env.VITE_FORM_API, {
    method: "POST",
    mode: "no-cors", // ✅ FIXES CORS
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // We assume success if no network error
  return { success: true };
}
