export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function NB() {
  return (
    <div>
      <h1>Notebook</h1>
      <pre>
{`

2026-03-04
- Changed topic to OpenPLC
- Looked for papers on acm site

2026-02-27
- Started working within the VM 
- Made a small syscall program that did work

2026-02-26
- Start the Fuzzer
- Work

2026-02-25
- Made the NB
- Catchup on COP6938 from being sick`}
      </pre>
    </div>
  );
}
