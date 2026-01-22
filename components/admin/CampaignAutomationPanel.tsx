"use client"

import { useState } from "react"
import { listAutomationRules, addAutomationRule } from "@/lib/intel/automation"

export default function CampaignAutomationPanel() {
  const [rules, setRules] = useState(listAutomationRules())
  const [form, setForm] = useState({
    label: "",
    channel: "email",
    metric: "open_rate",
    operator: "<",
    threshold: 20,
    actionType: "resend_email",
    campaignId: "",
    ctaId: "",
    newText: "",
    postId: ""
  })

  function submit() {
    const action =
      form.actionType === "resend_email"
        ? { type: "resend_email", campaignId: form.campaignId }
        : form.actionType === "override_cta"
        ? { type: "override_cta", ctaId: form.ctaId, newText: form.newText }
        : { type: "boost_social", postId: form.postId }

    addAutomationRule({
      id: `rule-${Date.now()}`,
      label: form.label,
      trigger: {
        channel: form.channel as any,
        metric: form.metric as any,
        operator: form.operator as any,
        threshold: Number(form.threshold)
      },
      action,
      active: true
    })

    setRules(listAutomationRules())
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Campaign Automation Rules</h3>

      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col">
          Label
          <input
            type="text"
            value={form.label}
            onChange={(e) => setForm({ ...form, label: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Channel
          <select
            value={form.channel}
            onChange={(e) => setForm({ ...form, channel: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="email">Email</option>
            <option value="cta">CTA</option>
            <option value="social">Social</option>
          </select>
        </label>

        <label className="flex flex-col">
          Metric
          <select
            value={form.metric}
            onChange={(e) => setForm({ ...form, metric: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="open_rate">Open Rate</option>
            <option value="ctr">CTR</option>
            <option value="conversion_rate">Conversion Rate</option>
            <option value="engagement">Engagement</option>
          </select>
        </label>

        <label className="flex flex-col">
          Operator
          <select
            value={form.operator}
            onChange={(e) => setForm({ ...form, operator: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="<">Less Than</option>
            <option value=">">Greater Than</option>
            <option value="=">Equals</option>
          </select>
        </label>

        <label className="flex flex-col">
          Threshold
          <input
            type="number"
            value={form.threshold}
            onChange={(e) => setForm({ ...form, threshold: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Action Type
          <select
            value={form.actionType}
            onChange={(e) => setForm({ ...form, actionType: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="resend_email">Resend Email</option>
            <option value="override_cta">Override CTA</option>
            <option value="boost_social">Boost Social Post</option>
          </select>
        </label>

        {form.actionType === "resend_email" && (
          <label className="flex flex-col col-span-2">
            Campaign ID
            <input
              type="text"
              value={form.campaignId}
              onChange={(e) => setForm({ ...form, campaignId: e.target.value })}
              className="border p-2 rounded"
            />
          </label>
        )}

        {form.actionType === "override_cta" && (
          <>
            <label className="flex flex-col">
              CTA ID
              <input
                type="text"
                value={form.ctaId}
                onChange={(e) => setForm({ ...form, ctaId: e.target.value })}
                className="border p-2 rounded"
              />
            </label>
            <label className="flex flex-col">
              New Text
              <input
                type="text"
                value={form.newText}
                onChange={(e) => setForm({ ...form, newText: e.target.value })}
                className="border p-2 rounded"
              />
            </label>
          </>
        )}

        {form.actionType === "boost_social" && (
          <label className="flex flex-col col-span-2">
            Post ID
            <input
              type="text"
              value={form.postId}
              onChange={(e) => setForm({ ...form, postId: e.target.value })}
              className="border p-2 rounded"
            />
          </label>
        )}
      </div>

      <button
        onClick={submit}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Add Rule
      </button>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">Active Rules</h4>
        <ul className="space-y-2">
          {rules.map((r) => (
            <li key={r.id} className="border p-2 rounded">
              <strong>{r.label}</strong> — {r.trigger.channel}.{r.trigger.metric} {r.trigger.operator} {r.trigger.threshold}
              <div className="text-xs text-gray-600">
                → {r.action.type === "resend_email" && `Resend ${r.action.campaignId}`}
                {r.action.type === "override_cta" && `Override ${r.action.ctaId} → "${r.action.newText}"`}
                {r.action.type === "boost_social" && `Boost ${r.action.postId}`}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
