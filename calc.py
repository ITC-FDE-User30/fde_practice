def calculate(first: float, second: float, operator: str) -> float:
    if operator == "+":
        return first + second
    if operator == "-":
        return first - second
    if operator == "*":
        return first * second
    if operator == "/":
        return first / second
    raise ValueError("Unsupported operator.")


def run() -> None:
    print("Calculator (+, -, *, /). Enter q to quit.")

    while True:
        operator = input("Operator: ").strip()
        if operator.lower() == "q":
            print("Goodbye!")
            break

        try:
            first = float(input("First number: "))
            second = float(input("Second number: "))
            result = calculate(first, second, operator)
        except ValueError as error:
            print(f"Invalid input: {error}")
        except ZeroDivisionError:
            print("Error: cannot divide by zero.")
        else:
            print(f"Result: {result}")


if __name__ == "__main__":
    run()
