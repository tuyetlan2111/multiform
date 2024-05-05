export default function ButtonLink({ text, onClick }: { text: string, onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  )
}