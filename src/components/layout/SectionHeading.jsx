const SectionHeading = ({ heading,subHeading,target,trigger}) => {
  return (
    <div
        id={target}
        className="flex flex-col gap-4 items-center overflow-hidden"
    >
        <span id={trigger} className="text-body-large text-primary-300">
            { subHeading }
        </span>
        <h1 id="headingText" className="text-h1">
            { heading }
        </h1>
    </div>
  )
}
export default SectionHeading