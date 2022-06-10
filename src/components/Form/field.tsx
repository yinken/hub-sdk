import * as React from "react"

type Props = {
  tag: "input"
  type: "text" | "email"
  name: string
  label: string
  placeholder?: string
  onChange: () => any
}

export const Field = React.forwardRef((props: Props, ref) => {
  const { name, tag = "input", label, placeholder, onChange } = props
  let Tag = tag

  return (
    <div className={["w-full", "flex", "flex-col", "sm:flex-row"].join(" ")}>
      <label className={["w-full", "sm:w-1/4", "p-1", "font-bold"].join(" ")}>
        {label}
      </label>
      <Tag
        ref={ref}
        name={name}
        className={["w-full", "sm:w-3/4", "p-1", "border", "rounded"].join(" ")}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  )
})
