import React from "react";
import { DocumentNode, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import {
	MultilingualContextType,
	MultilingualContext,
} from "../../contexts/MultilingualContext";
import {
	ToastNotificationContextType,
	ToastNotificationContext,
} from "../../contexts/ToastNotificationContext";

import LoadingSkeleton from "./ProposalFormLoadingSkeleton";
import ErrorBoundary from "./ProposalFormErrorBoundary";
import FieldErrorMessage from "./ProposalFormFieldErrorMessage";

const ToastNotification = React.lazy(
	() => import("../ToastNotification/ToastNotification"),
);

interface Props {
	query: DocumentNode;
}

interface Services {
	value: string;
}

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	telephone: string;
	company: string;
	service: [Services];
	budget: number;
	time: string;
	message: string;
}

const ProposalForm: React.FunctionComponent<Props> = ({ query }) => {
	const id = React.useId();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<FormData>({ mode: "onChange" });

	const recaptchaRef = React.createRef<ReCAPTCHA>();
	const [verified, setVerified] = React.useState<boolean>(false);

	const { language, isPortuguese } = React.useContext(
		MultilingualContext,
	) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(query, {
		variables: { language },
	});

	const { show, setShow, setSuccess, setTitle, setMessage } =
		React.useContext(
			ToastNotificationContext,
		) as ToastNotificationContextType;

	if (loading) return <LoadingSkeleton />;
	if (error) return <ErrorBoundary message={error.message} />;

	const onChange = () => {
		setVerified((currentValue) => !currentValue);
	};

	const onSubmit = (data: FormData) => {
		const templateParams = {
			subject: "Email via Proposal Form",
			full_name: `${data.firstName} ${data.lastName}`,
			first_name: data.firstName,
			last_name: data.lastName,
			email: data.email,
			telephone: data.telephone,
			company: data.company,
			service: data.service,
			budget: data.budget,
			time: data.time,
			message: data.message,
		};

		reset();
		recaptchaRef.current?.reset();
		setSuccess(true);
		setTitle(
			isPortuguese()
				? "Proposta enviada com sucesso!"
				: "Proposal successfully sent!",
		);
		setMessage(
			isPortuguese()
				? "Enviamos-lhe um e-mail com mais detalhes."
				: "We've sent you an email with more details.",
		);
		setShow(true);
		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID_2 || "",
				isPortuguese() ? "template_exv6tsj" : "template_p37nhub",
				templateParams,
				process.env.REACT_APP_EMAILJS_USER_ID_2 || "",
			)
			.then((response) => {
				console.log(response);
				setSuccess(true);
				setTitle(
					isPortuguese()
						? "Proposta enviada com sucesso!"
						: "Proposal successfully sent!",
				);
				setMessage(
					isPortuguese()
						? "Enviamos-lhe um e-mail com mais detalhes."
						: "We've sent you an email with more details.",
				);
				setShow(true);
			})
			.catch((error) => {
				console.error(error);
				setSuccess(false);
				setTitle(
					isPortuguese()
						? "Ocorreu um erro inesperado!"
						: "An unexpected error has occurred!",
				);
				setMessage(
					isPortuguese()
						? "Por favor, tente novamente mais tarde."
						: "Please, try again later.",
				);
				setShow(true);
			});
	};

	return (
		<React.Fragment>
			{data && data.proposalForm && (
				<React.Fragment>
					<div className="container mx-auto flex flex-col items-center justify-center gap-y-8 px-4 pt-12 pb-12 sm:px-6 lg:gap-y-12 lg:px-8">
						<div className="space-y-4 text-left lg:text-center">
							<h1 className="text-4xl font-medium text-primary">
								{data.proposalForm.title}
							</h1>
							<p className="text-lg font-normal text-gray-900">
								{data.proposalForm.text}
							</p>
						</div>
						<form
							id={`${id}-form`}
							onSubmit={handleSubmit(onSubmit)}
							className="flex w-full flex-col flex-wrap gap-y-4 xl:w-2/3">
							<div className="flex flex-col gap-x-4 gap-y-4 lg:flex-row">
								<div className="flex flex-1 flex-col">
									<label
										htmlFor={`${id}-firstName`}
										className="block text-base font-normal text-primary">
										{data.proposalForm.inputText[0]} *
									</label>
									<input
										type="text"
										id={`${id}-firstName`}
										autoComplete="on"
										placeholder="Foo"
										{...register("firstName", {
											required: {
												value: true,
												message:
													"O nome é um campo obrigatório a preencher!",
											},
											minLength: {
												value: 2,
												message:
													"O comprimento mínimo é de 2 caracteres!",
											},
											maxLength: {
												value: 80,
												message:
													"O comprimento máximo é de 80 caracteres!",
											},
											pattern: {
												value: /^[a-zA-Z-_\s]*$/i,
												message:
													"Apenas é premitido o uso de letras de A a Z!",
											},
										})}
										className={`mt-1 block w-full rounded-sm py-2.5 pl-4 text-gray-600 shadow-sm sm:text-sm 
                                            ${
												errors.firstName
													? "border-red-500 focus:border-red-500 focus:ring-red-500"
													: "border-gray-300 focus:border-primary focus:ring-primary"
											} 
                                        `}
									/>
									{errors.firstName && (
										<FieldErrorMessage
											message={errors.firstName.message}
										/>
									)}
								</div>
								<div className="flex flex-1 flex-col">
									<label
										htmlFor={`${id}-lastName`}
										className="block text-base font-normal text-primary">
										{data.proposalForm.inputText[1]} *
									</label>
									<input
										type="text"
										id={`${id}-lastName`}
										autoComplete="on"
										placeholder="Bar"
										{...register("lastName", {
											required: {
												value: true,
												message:
													"O sobrenome é um campo obrigatório a preencher!",
											},
											minLength: {
												value: 2,
												message:
													"O comprimento mínimo é de 2 caracteres!",
											},
											maxLength: {
												value: 80,
												message:
													"O comprimento máximo é de 80 caracteres!",
											},
											pattern: {
												value: /^[a-zA-Z-_\s]*$/i,
												message:
													"Apenas é premitido o uso de letras de A a Z!",
											},
										})}
										className={`mt-1 block w-full rounded-sm py-2.5 pl-4 text-gray-600 shadow-sm sm:text-sm 
                                            ${
												errors.lastName
													? "border-red-500 focus:border-red-500 focus:ring-red-500"
													: "border-gray-300 focus:border-primary focus:ring-primary"
											} 
                                        `}
									/>
									{errors.lastName && (
										<FieldErrorMessage
											message={errors.lastName.message}
										/>
									)}
								</div>
							</div>
							<div className="flex flex-col gap-x-4 gap-y-4 lg:flex-row">
								<div className="flex flex-1 flex-col">
									<label
										htmlFor={`${id}-email`}
										className="block text-base font-normal text-primary">
										{data.proposalForm.inputText[2]} *
									</label>
									<input
										type="email"
										id={`${id}-email`}
										autoComplete="on"
										placeholder="example@example.com"
										{...register("email", {
											required: {
												value: true,
												message:
													"O email é um campo obrigatório a preencher!",
											},
											minLength: {
												value: 8,
												message:
													"O comprimento mínimo é de 8 caracteres!",
											},
											pattern: {
												value: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/i,
												message:
													"Exemplo de formato aceite: example@example.com",
											},
										})}
										className={`mt-1 block w-full rounded-sm py-2.5 pl-4 text-gray-600 shadow-sm sm:text-sm 
                                            ${
												errors.email
													? "border-red-500 focus:border-red-500 focus:ring-red-500"
													: "border-gray-300 focus:border-primary focus:ring-primary"
											} 
                                        `}
									/>
									{errors.email && (
										<FieldErrorMessage
											message={errors.email.message}
										/>
									)}
								</div>
								<div className="flex flex-1 flex-col">
									<label
										htmlFor={`${id}-telephone`}
										className="block text-base font-normal text-primary">
										{data.proposalForm.inputText[3]} *
									</label>
									<input
										type="tel"
										id={`${id}-telephone`}
										autoComplete="on"
										placeholder="+351 999 999 999"
										{...register("telephone", {
											required: {
												value: true,
												message:
													"O telefone é um campo obrigatório a preencher!",
											},
											minLength: {
												value: 9,
												message:
													"O comprimento mínimo é de 9 caracteres!",
											},
											maxLength: {
												value: 16,
												message:
													"O comprimento máximo é de 16 caracteres!",
											},
											pattern: {
												value: /^(\+?\d{3}|00)?\s?(\d{3})\s?(\d{3})\s?(\d{3})$/i,
												message:
													"Exemplo de formato aceite: +351 999 999 999",
											},
										})}
										className={`mt-1 block w-full rounded-sm py-2.5 pl-4 text-gray-600 shadow-sm sm:text-sm 
                                            ${
												errors.telephone
													? "border-red-500 focus:border-red-500 focus:ring-red-500"
													: "border-gray-300 focus:border-primary focus:ring-primary"
											} 
                                        `}
									/>
									{errors.telephone && (
										<FieldErrorMessage
											message={errors.telephone.message}
										/>
									)}
								</div>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor={`${id}-company`}
									className="block text-base font-normal text-primary">
									{data.proposalForm.inputText[4]} *
								</label>
								<input
									type="text"
									id={`${id}-company`}
									placeholder="Foo & Bar"
									{...register("company", {
										required: {
											value: true,
											message:
												"A sua empresa é um campo obrigatório a preencher!",
										},
										minLength: {
											value: 2,
											message:
												"O comprimento mínimo é de 2 caracteres!",
										},
										pattern: {
											value: /^[a-zA-Z0-9.,_&-\s]*$/i,
											message:
												"Exemplo de formato aceite: Example & Example, Lda.",
										},
									})}
									className={`mt-1 block w-full rounded-sm py-2.5 pl-4 text-gray-600 shadow-sm sm:text-sm 
                                        ${
											errors.company
												? "border-red-500 focus:border-red-500 focus:ring-red-500"
												: "border-gray-300 focus:border-primary focus:ring-primary"
										} 
                                    `}
								/>
								{errors.company && (
									<FieldErrorMessage
										message={errors.company.message}
									/>
								)}
							</div>
							<div className="flex flex-col gap-x-4 gap-y-4 lg:flex-row">
								<div className="flex flex-1 flex-col">
									<h6 className="mb-1 text-base font-normal text-primary">
										{data.proposalForm.servicesTitle}
									</h6>
									{data.proposalForm.servicesCollection?.items.map(
										(service: any, index: number) => (
											<React.Fragment
												key={`${id}-Service-${index}`}>
												<div className="flex flex-1 flex-row items-center gap-x-2">
													<input
														type="checkbox"
														id={`${id}-service-${index}`}
														placeholder="service"
														value={service.value}
														{...register(
															"service",
															{
																required: {
																	value: true,
																	message:
																		"O serviço é um campo obrigatório a preencher!",
																},
															},
														)}
														className="h-4 w-4 rounded-sm border-gray-300 text-primary focus:border-primary focus:ring-primary"
													/>
													<label
														htmlFor={`${id}-service-${index}`}
														className="block text-sm font-light text-gray-900">
														{service.title}
													</label>
												</div>
											</React.Fragment>
										),
									)}
								</div>
								<div className="flex flex-1 flex-col">
									<h6 className="mb-1 text-base font-normal text-primary">
										{data.proposalForm.budgetsTitle}
									</h6>
									{data.proposalForm.budgetsCollection?.items.map(
										(budget: any, index: number) => (
											<React.Fragment
												key={`${id}-Budget-${index}`}>
												<div className="flex flex-1 flex-row items-center gap-x-2">
													<input
														type="radio"
														id={`${id}-budget-${index}`}
														placeholder="budget"
														value={budget.value}
														{...register("budget", {
															required: {
																value: true,
																message:
																	"O orçamento é um campo obrigatório a preencher!",
															},
														})}
														className="h-4 w-4 rounded-sm border-gray-300 text-primary focus:border-primary focus:ring-primary"
													/>
													<label
														htmlFor={`${id}-budget-${index}`}
														className="block text-sm font-light text-gray-900">
														{budget.title}
													</label>
												</div>
											</React.Fragment>
										),
									)}
								</div>
								<div className="flex flex-1 flex-col">
									<h6 className="mb-1 text-base font-normal text-primary">
										{data.proposalForm.timesTitle}
									</h6>
									{data.proposalForm.timesCollection?.items.map(
										(time: any, index: number) => (
											<React.Fragment
												key={`${id}-Time-${index}`}>
												<div className="flex flex-1 flex-row items-center gap-x-2">
													<input
														type="radio"
														id={`${id}-time-${index}`}
														placeholder="time"
														value={time.value}
														{...register("time", {
															required: {
																value: true,
																message:
																	"O prioridade é um campo obrigatório a preencher!",
															},
														})}
														className="h-4 w-4 rounded-sm border-gray-300 text-primary focus:border-primary focus:ring-primary"
													/>
													<label
														htmlFor={`${id}-time-${index}`}
														className="block text-sm font-light text-gray-900">
														{time.title}
													</label>
												</div>
											</React.Fragment>
										),
									)}
								</div>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor={`${id}-message`}
									className="block text-base font-normal text-primary">
									{data.proposalForm.inputText[5]} *
								</label>
								<textarea
									id={`${id}-message`}
									cols={2}
									rows={4}
									placeholder="Lorem ipsum..."
									{...register("message", {
										required: {
											value: true,
											message:
												"A sua ideia de projeto é um campo obrigatório a preencher!",
										},
										minLength: {
											value: 16,
											message:
												"O comprimento mínimo é de 16 caracteres!",
										},
									})}
									className={`mt-1 block w-full rounded-sm py-2.5 pl-4 text-gray-600 shadow-sm sm:text-sm 
                                        ${
											errors.message
												? "border-red-500 focus:border-red-500 focus:ring-red-500"
												: "border-gray-300 focus:border-primary focus:ring-primary"
										} 
                                    `}
								/>
								{errors.message && (
									<FieldErrorMessage
										message={errors.message.message}
									/>
								)}
							</div>
							<React.Suspense
								fallback={
									<p className="text-sm font-light text-primary">
										Loading reCAPTCHA...
									</p>
								}>
								<ReCAPTCHA
									ref={recaptchaRef}
									sitekey={
										process.env
											.REACT_APP_GOOGLE_RECAPTCHA_KEY ||
										""
									}
									onChange={onChange}
									theme={"light"}
									type={"image"}
									size={"normal"}
								/>
							</React.Suspense>
							<button
								type="submit"
								className={`mx-auto inline-flex h-12 w-full items-center justify-center rounded-none border border-transparent bg-primary px-4 text-base font-normal text-white shadow-sm hover:opacity-80 lg:w-fit ${
									verified
										? "cursor-pointer"
										: "cursor-not-allowed opacity-80"
								} ${
									isValid
										? "cursor-pointer"
										: "cursor-not-allowed opacity-80"
								}`}
								disabled={!verified && !isValid}>
								{data.proposalForm.buttonText}
							</button>
						</form>
						{show ? <ToastNotification /> : null}
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default React.memo(ProposalForm);
