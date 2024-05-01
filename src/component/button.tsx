import Link from "next/link";

export default function ButtonLink({ text, onClick}: { text : string, onClick: () => void}) {
  return (
    // <Link href={"/step2"} className="btn-link" >
      <button type="button" onClick={onClick}>
        {text}
      </button>
    // </Link>
  )
}