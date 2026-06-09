"use client"

import { useState } from "react"

export default function OrthoTraumaAdmission() {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    mrn: "",
    mechanism: "RTA",
    diagnosis: "",
    side: "Right",
    medHx: "",
    surgHx: "",
    nvb: "Intact NVB",
    skin: "Intact Skin",
    tempManagement: "",
    plan: ""
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const generateWhatsAppMessage = () => {
    const message = `${formData.patientName}
${formData.age}y | ${formData.mrn}

${formData.mechanism}
${formData.side} ${formData.diagnosis}

Med hx: ${formData.medHx || "Free"}
Surg hx: ${formData.surgHx || "Free"}

${formData.nvb}
${formData.skin}

${formData.tempManagement}

${formData.plan}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/?text=${encodedMessage}`

    window.open(whatsappURL, "_blank")
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Orthopedic Trauma Admission
          </h1>
          <p className="text-slate-500">
            Fast admission entry for emergency orthopedic cases
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Patient Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Patient Name
            </label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              placeholder="Ahmed Said Ahmed"
              className="w-full border border-slate-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-semibold mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="32"
              className="w-full border border-slate-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* MRN */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              MRN / Hospital ID
            </label>
            <input
              type="text"
              name="mrn"
              value={formData.mrn}
              onChange={handleChange}
              placeholder="b500011694"
              className="w-full border border-slate-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Mechanism */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Mechanism of Injury
            </label>
            <select
              name="mechanism"
              value={formData.mechanism}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <option>RTA</option>
              <option>Fall</option>
              <option>Sports Injury</option>
              <option>Gunshot</option>
              <option>Other</option>
            </select>
          </div>

          {/* Diagnosis */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Diagnosis
            </label>
            <input
              type="text"
              name="diagnosis"
              value={formData.diagnosis}
              onChange={handleChange}
              placeholder="shaft humerus fracture"
              className="w-full border border-slate-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Side */}
          <div>
            <label className="block text-sm font-semibold mb-2">Side</label>
            <select
              name="side"
              value={formData.side}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <option>Right</option>
              <option>Left</option>
              <option>Bilateral</option>
            </select>
          </div>

          {/* Medical History */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Medical History
            </label>
            <textarea
              name="medHx"
              value={formData.medHx}
              onChange={handleChange}
              rows={3}
              placeholder="Free"
              className="w-full border border-slate-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Surgical History */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Surgical History
            </label>
            <textarea
              name="surgHx"
              value={formData.surgHx}
              onChange={handleChange}
              rows={3}
              placeholder="Free"
              className="w-full border border-slate-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* NVB */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Neurovascular Status
            </label>
            <select
              name="nvb"
              value={formData.nvb}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <option>Intact NVB</option>
              <option>Compromised</option>
            </select>
          </div>

          {/* Skin */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Skin Condition
            </label>
            <select
              name="skin"
              value={formData.skin}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <option>Intact Skin</option>
              <option>Open Fracture</option>
              <option>Abrasion</option>
              <option>Wound Present</option>
            </select>
          </div>

          {/* Temp Management */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">
              Temporary Management
            </label>
            <textarea
              rows={3}
              name="tempManagement"
              value={formData.tempManagement}
              onChange={handleChange}
              placeholder="U slab applied"
              className="w-full border border-slate-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Plan */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">Plan</label>
            <textarea
              rows={3}
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              placeholder="Waiting available bed"
              className="w-full border border-slate-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* File Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">
              Upload X-ray Images
            </label>
            <input
              type="file"
              multiple
              className="w-full border border-slate-300 rounded-2xl p-3 bg-slate-50"
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex flex-col md:flex-row gap-4 justify-center pt-4">
            <button
              type="button"
              onClick={generateWhatsAppMessage}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg"
            >
              Send to WhatsApp
            </button>

            <button
              type="submit"
              className="bg-slate-800 hover:bg-slate-900 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg"
            >
              Save Admission
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}